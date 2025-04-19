import { test, expect } from '@playwright/test';

test.describe('GET Request API Test', () => {
    test('should validate status code and JSON response', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2');

        // Validate response status
        expect(response.status()).toBe(200);

        // Validate response body
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('page', 2);
        expect(responseBody).toHaveProperty('data');
        expect(Array.isArray(responseBody.data)).toBeTruthy();
    });
});