import { test, expect } from '@playwright/test';
import{ Login_Page } from '../pages/Login_Page';
import { readCredentialsFromExcel } from '../utils/file_utils';
test.describe.parallel('Login Tests', () => {
    let LoginPage: Login_Page;

    test.beforeEach(async ({ page }) => {
        LoginPage = new Login_Page(page);
        await LoginPage.navigateToLoginPage();
    });

    test('should login with valid credentials', async ({ page }) => {
        await LoginPage.UserLogin('standard_user', 'secret_sauce');
      //  await expect(page).toHaveURL(/dashboard/); // Replace with the expected URL after login
       // await expect(page.locator('text=Welcome')).toBeVisible(); // Replace with a valid locator
    });

    test('should show error for invalid credentials', async () => {
        await LoginPage.UserLogin('invalidUsername', 'invalidPassword');
      //  await expect(LoginPage.getErrorMessage()).toContain('Invalid username or password'); // Replace with actual error message
    });

    test('shrould read data from excel', async () => {
       //await LoginPage.navigateToLoginPage();
       await LoginPage.loginWithExcelData();
    }
    );
});