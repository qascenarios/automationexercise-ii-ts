import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    // Locators for login-related elements
    private EMAIL_INPUT: Locator;
    private PASSWORD_INPUT: Locator;
    private LOGIN_BUTTON: Locator;
    private LOGOUT_BUTTON: Locator;

    // Constructor initializes the page and element locators
    constructor(page: Page) {
        super(page);
        this.EMAIL_INPUT = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.PASSWORD_INPUT = page.getByRole('textbox', { name: 'Password' });
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Login' });
        this.LOGOUT_BUTTON = page.getByRole('link', { name: 'Logout' });
    }

    // Enters the user's email address into the login form
    async enterEmail(email: string) {
        await this.EMAIL_INPUT.fill(email);
    }

    // Enters the user's password into the login form
    async enterPassword(password: string) {
        await this.PASSWORD_INPUT.fill(password);
    }

    // Clicks the Login button to submit the form
    async clickLogin() {
        await this.LOGIN_BUTTON.click();
    }
    
    // Verifies that the Logout button is visible and has the expected text
    async isLogoutButtonVisible(text: string) {
        await expect(this.LOGOUT_BUTTON).toHaveText(text);
    }
}