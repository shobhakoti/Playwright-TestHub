import { chromium, Browser } from '@playwright/test';

class BrowserManager {
    private static browser: Browser;

    static async getBrowser(browserType: 'chromium' | 'firefox' | 'webkit' = 'chromium'): Promise<Browser> {
        if (!this.browser) {
            switch (browserType) {
                case 'firefox':
                    this.browser = await require('@playwright/test').firefox.launch({ headless: false });
                    break;
                case 'webkit':
                    this.browser = await require('@playwright/test').webkit.launch({ headless: false });
                    break;
                default:
                    this.browser = await chromium.launch({ headless: false });
            }
        }
        return this.browser;
    }
}
export default BrowserManager;
