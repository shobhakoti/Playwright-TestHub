import { Page } from 'playwright/test';
import { Locator } from 'playwright-core';

function takeScreenshotOnFailure(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        try {
            await originalMethod.apply(this, args);
        } catch (error) {
            const page: Page = args[0]; // Assuming the first argument is the Page instance
            await page.screenshot({ path: `error-${key}.png` });
            throw error;
        }
    };
}
// This decorator takes a method and wraps it with a try-catch block.
// If the method throws an error, it takes a screenshot of the current page and saves it with a filename based on the method name.
// This is useful for debugging purposes, as it allows you to capture the state of the page at the time of the error.
// The decorator can be applied to any method in a class, allowing for flexible and reusable error handling.
// The screenshot is saved in the current working directory with a filename that includes the method name.
// This pattern is useful for adding cross-cutting concerns like logging, error handling, or retry logic without modifying the original method.
// The takeScreenshotOnFailure decorator can be applied to any method in a class, allowing for flexible and reusable error handling.
export { takeScreenshotOnFailure };