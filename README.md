# Playwright-TestHub
A scalable and efficient test automation framework using Playwright and TypeScript. Designed for end-to-end (E2E) testing of web applications with robust reporting and parallel execution.

Project Setup

Step 1: Clone the Repository
git clone https://github.com/techgurud/Playwright-TestHub
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


@playwright/test → Playwright framework for running tests.

typescript → Enables TypeScript support.

ts-node → Allows running TypeScript files without compiling them manually.

dotenv → Manages environment variables securely.

eslint → Enforces coding standards and best practices.

prettier → Ensures consistent code formatting.

Folder Structure

Playwright-TestHub/

project_root/
├── config/                         # Configuration management
│   ├── config.yaml                 # App/environment settings in YAML format
│   ├── environment_manager.ts      # Manages environment switching (dev, QA, prod)
│   └── config_reader.ts            # Reads and provides access to config values
│
├── drivers/
│   └── browser_manager.ts
│
├── utils/ # Utility and helper classes
│   ├── logger.ts                   # Logging utilities
│   ├── wait_utils.ts               # Explicit/smart waits
│   ├── element_utils.ts            # Click, input, visibility checks
│   ├── assertion_utils.ts          # Assertion helpers
│   ├── date_time_utils.ts          # Date and time functions
│   ├── random_data_generator.ts    # Generate test data
│   ├── file_utils.ts               # Read/write file utilities
│   ├── screenshot_utils.ts         # Capture screenshots
│   ├── exception_handler.ts        # Exception capture and handling
│   ├── retry_utility.ts            # Retry logic for flaky tests
│   ├── validation_utils.ts         # Input validation helpers
│   └── service_locator.ts
│
├── data/ # Test data files
│   ├── test_data.json              # JSON test data
│   ├── excel_data.xlsx
│   ├── data_reader.ts
│   └── json_yaml_parser.ts
│
├── api_utils/                      # API testing support
│   ├── api_client.ts               # HTTP client for API calls
│   ├── api_validator.ts            # Response validation helpers
│   └── mock_server_helper.ts       # Mocking/stubbing support
│
├── db_utils/ # Database connectors
│   ├── sql_connector.ts            # SQL DB connector
│   └── nosql_connector.ts          # NoSQL connector (Mongo, etc.)
│
├── reports/ # Reporting
│   ├── html_reporter.ts            # HTML report logic
│   ├── result_parser.ts            # Parse results
│   ├── email_reporter.ts           # Email report summary
│   └── allure_report_config.xml    # Allure configuration
│
├── ci_cd/ # CI/CD scripts
│   ├── test_runner.ts              # Script to run tests
│   ├── ci_trigger.ts               # Trigger CI jobs
│   └── notifier.ts                 # Send CI/CD notifications
│
├── tests/
│   ├── test_login.ts
│   └── test_checkout.ts
│
├── pages/ # POM for app pages
│   ├── login_page.ts
│   ├── dashboard_page.ts
│   └── base_page.ts
│
├── resources/ # Static resources
│   └── locators.yaml # Element locators
│
├── requirements.txt
└── README.md.                           # Project documentation
├── playwright.config.ts                 # Playwright configuration
├── tsconfig.json                        # TypeScript configuration
├── package.json                         # Project metadata and dependencies
├── package-lock.json                    # Lock file for npm
└── .gitignore                           # Git ignored files