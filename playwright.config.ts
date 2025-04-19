//Central configuration file for Playwright test runner.
//Keeps all test-related configs in one place.
//Allows scaling tests across browsers/environments with minimal changes.

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Base URL for the application under test
    use: {
        baseURL: 'https://example.com', // Replace with your application's base URL
    },

    // Global test timeout
    timeout: 30 * 1000, // 30 seconds

    // Reporters for test results
    reporter: [
        ['list'], // Default console reporter
        ['html', { outputFolder: 'test-results/html-report', open: 'never' }], // HTML report
    ],

    // Browser/device settings
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'WebKit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ],

    // Parallelism/workers
    workers: 4, // Adjust based on your system's capabilities
});
