import { test, expect } from '@playwright/test';
import { RegisterPage } from './pages/RegisterPage';
import { registerData } from './utils/testDate/auth';
import { openUrl, generateRandomEmail } from './utils/helpers';

// Test case: Verify user can successfully register a new account
test('User registration flow', async ({ page }) => {
  // Initialize Register page object
  const registerPage = new RegisterPage(page);
  // Generate a unique email for registration
  const generatedEmail = generateRandomEmail();
  // Navigate to login/signup page
  await openUrl(page, '/login');
  // Handle any consent or dialog pop-up if present
  await registerPage.handleDialog();
  // Enter name and generated email for signup
  await registerPage.enterName(registerData.name);
  await registerPage.enterEmail(generatedEmail);
  // Click Signup to proceed to account details form
  await registerPage.clickSignup();
  // Fill in the registration form with user details
  await registerPage.fillRegistrationForm(registerData);
  await registerPage.selectCountry(registerData.country);
  await registerPage.enterState(registerData.state);
  await registerPage.enterCity(registerData.city);
  await registerPage.enterZipcode(registerData.zipcode);
  await registerPage.enterMobileNumber(registerData.mobileNumber);
  // Submit the registration form
  await registerPage.clickCreateAccount();
  // Verify that the account was successfully created
  expect(await registerPage.verifyAccountCreation());
});
