import { test, expect } from '@playwright/test';
import { ApiClient } from '../../apiutils/api_client';

test.describe('GET User API Tests', () => {
    let apiClient: ApiClient;
    test('should fetch user details successfully', async ({}) => {
        const client = new ApiClient();
        const response = await client.get("https://reqres.in/api/users?page=2");

        // Validate response status
        expect(response.status()).toBe(200);

        // Validate response body
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('name');
        expect(responseBody).toHaveProperty('email');
    });
});