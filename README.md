# Playwright-TestHub
A scalable and efficient test automation framework using Playwright and TypeScript. Designed for end-to-end (E2E) testing of web applications with robust reporting and parallel execution.

Project Setup

Step 1: Clone the Repository
git clone https://github.com/yourusername/Playwright-TestHub.git
cd Playwright-TestHub

Step 2: Initialize a Node.js Project
npm init -y

Step 3: Install Playwright and Dependencies
npm install -D playwright @playwright/test typescript ts-node dotenv

Step 4: Install Browsers
npx playwright install

Step 5: Configure TypeScript
Run the following command to generate a tsconfig.json file:
npx tsc --init

Update tsconfig.json to include:
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "tests",
    "strict": true,
    "esModuleInterop": true
  }
}

3. Folder Structure

Playwright-TestHub/
│-- tests/                 # Test cases
│   ├── login.test.ts      # Example login test
│   ├── homepage.test.ts   # Example homepage test
│-- pages/                 # Page Object Model (POM)
│   ├── login.page.ts      # Login page object
│-- utils/                 # Utility functions
│   ├── helpers.ts         # Custom helper functions
│-- reports/               # Test reports
│-- test-results/          # Playwright test results
│-- playwright.config.ts   # Playwright test configuration
│-- tsconfig.json          # TypeScript configuration
│-- .gitignore             # Ignore unnecessary files
│-- package.json           # Project metadata and dependencies
│-- README.md              # Project documentation
4. Running Tests
Run all tests:

npx playwright test
Run tests in headed mode (with UI):

npx playwright test --headed
Run a specific test file:

npx playwright test tests/login.test.ts
Generate HTML Test Report:

npx playwright show-report
5. Environment Variables (Optional)
Create a .env file in the root directory to store sensitive data:

BASE_URL=https://yourwebsite.com
USERNAME=your_username
PASSWORD=your_password

6. CI/CD Integration
For GitHub Actions, create .github/workflows/playwright.yml:

name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Install Dependencies
        run: npm install

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Tests
        run: npx playwright test
