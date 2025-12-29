import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { registerData } from '../utils/testDate/auth';
import { openUrl, generateRandomEmail } from '../utils/helpers';

test('User registration flow', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const generatedEmail = generateRandomEmail();

  await openUrl(page, '/login');
  await registerPage.handleDialog();

  await registerPage.enterName(registerData.name);
  await registerPage.enterEmail(generatedEmail);
  await registerPage.clickSignup();
  await registerPage.fillRegistrationForm(registerData);
  await registerPage.selectCountry(registerData.country);
  await registerPage.enterState(registerData.state);
  await registerPage.enterCity(registerData.city);
  await registerPage.enterZipcode(registerData.zipcode);
  await registerPage.enterMobileNumber(registerData.mobileNumber);

  // Submit the registration form
  await registerPage.clickCreateAccount();

  // Verify account creation
  await expect(registerPage.ACCOUNT_CREATION_MSG).toBeVisible();
});
