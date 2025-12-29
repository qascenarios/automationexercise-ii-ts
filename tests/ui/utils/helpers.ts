
import { Page } from '@playwright/test';

const baseUrl = 'https://automationexercise.com';

async function openUrl(page: Page, endpoint: string) {
  await page.goto(`${baseUrl}${endpoint}`);
}

// Generate random email
function generateRandomEmail() {
    const timestamp = Date.now();
    return `testuser_${timestamp}@mail.com`;
}

export {baseUrl, openUrl, generateRandomEmail };
