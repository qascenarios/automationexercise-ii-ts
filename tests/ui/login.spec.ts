import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { openUrl } from './utils/helpers';
import { loginData } from './utils/testDate/auth';

// Test case: Verify user can successfully log in
test('User login flow', async ({ page }) => {
  // Initialize Login page object
  const loginPage = new LoginPage(page);
  // Navigate to the login page
  await openUrl(page, '/login');
  // Handle consent or dialog pop-up if present
  await loginPage.handleDialog();
  // Enter valid login credentials
  await loginPage.enterEmail(loginData.email);
  await loginPage.enterPassword(loginData.password);
  // Submit the login form
  await loginPage.clickLogin();
  // Verify successful login by checking that the Logout button is visible
  await loginPage.isLogoutButtonVisible('Logout');
});
