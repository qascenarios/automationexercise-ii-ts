
import { Page } from '@playwright/test';


async function openUrl(page: Page, endpoint: string) {
  await page.goto(`https://automationexercise.com${endpoint}`);
}

// Generate random email
function generateRandomEmail() {
    const timestamp = Date.now();
    return `testuser_${timestamp}@mail.com`;
}

export { openUrl, generateRandomEmail };
