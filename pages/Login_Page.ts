import { Locator, Page } from '@playwright/test';
import { readCredentialsFromExcel } from '../utils/file_utils';
export class Login_Page {
    private page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly pagetitle: Locator;
    //private logoutButton: string;
    readonly logoutButton: Locator;
    readonly OpenMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="username"]'); 
        this.passwordField = page.locator('[data-test="password"]'); 
        this.loginButton = page.locator('[data-test="login-button"]');
        this.pagetitle =  page.locator('[data-test="item-4-title-link"]')
        this.OpenMenu = page.locator('button', { hasText: 'Open Menu' });
        this.logoutButton = page.locator('a', { hasText: 'Logout' }); 
        
    }
    

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/'); 
    }
    async getErrorMessage(): Promise<string> {
        const errorMessage = await this.page.locator('.error-message').innerText(); 
        return errorMessage;
    }

    async UserLogin(username: string, password: string): Promise<void> {
       
        console.log(`🔄 Attempting login for: ${username}`);
    try {
        await this.usernameField.isVisible();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        //assertion
        //await this.pagetitle.getByText('Swag Labs').isVisible();
        console.log('Login successful');
        } catch (error) {
            console.error(`❌ Login failed for: ${username}. Reason:`, 'error.message');

        }
    }
    async loginWithExcelData(): Promise<void> {
        const credentials = readCredentialsFromExcel();
        for (const { username, password } of credentials) {
            if (!username || !password) {
        console.error("Invalid credentials found:", { username, password });
        continue;
    }
            console.log(`🔄 Attempting login for: ${username}`);
            await this.page.goto('https://www.saucedemo.com/');
        try {   
            await this.usernameField.isVisible();
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
            await this.pagetitle.getByText('Swag Labs').isVisible();
            console.log(`✅ Login successful for: ${username}`);
        } catch (error) {
            console.error(`❌ Login failed for: ${username}. Reason:`, 'error.message');
        }
            console.log(`🔄 Attempting logout for: ${username}`);
         try {
            await this.OpenMenu.click();
            // Wait for the logout button to be visible before clicking
            await this.logoutButton.click();
            console.log(`🔄 Logging out for: ${username}`) ;
            await this.page.waitForTimeout(2000); // Wait for 2 seconds
            await this.usernameField.isVisible();
            } catch (logoutError) {
            console.warn(`⚠️ Could not logout cleanly after login for ${username}. Continuing...`);
        }
            // Add any additional actions or assertions here if needed
        }
    }
}