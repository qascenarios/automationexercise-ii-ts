import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { openUrl } from '../utils/helpers';
import { loginData } from '../utils/testDate/auth';

test('User login flow', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await openUrl(page, '/login');
  await loginPage.handleDialog();

  await loginPage.enterEmail(loginData.email);
  await loginPage.enterPassword(loginData.password);
  await loginPage.clickLogin();

  // Verify successful login by checking for a logout button
  await loginPage.isLogoutButtonVisible('Logout');
});
