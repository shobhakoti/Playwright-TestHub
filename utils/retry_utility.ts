function retry(times: number) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            for (let i = 0; i < times; i++) {
                try {
                    return await originalMethod.apply(this, args);
                } catch (error) {
                    console.warn(`Retry ${i + 1} for ${key}`);
                    if (i === times - 1) throw error;
                }
            }
        };
    };
}
//Add new behaviors or responsibilities to objects dynamically - Decorator Pattern
// This pattern is used to add new behaviors or responsibilities to objects dynamically.
// In this case, the retry decorator adds retry logic to the method it decorates.
// The decorator takes a number of times to retry the method if it fails.
// The decorator wraps the original method and retries it the specified number of times if it throws an error.
// The decorator also logs a warning message each time it retries the method.
// This pattern is useful for adding cross-cutting concerns like logging, error handling, or retry logic without modifying the original method.
// The retry decorator can be applied to any method in a class, allowing for flexible and reusable retry logic.
export { retry };
