import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    private EMAIL_INPUT: Locator;
    private PASSWORD_INPUT: Locator;
    private LOGIN_BUTTON: Locator;
    private LOGOUT_BUTTON: Locator;

    constructor(page: Page) {
        super(page);
        this.EMAIL_INPUT = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.PASSWORD_INPUT = page.getByRole('textbox', { name: 'Password' });
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Login' });
        this.LOGOUT_BUTTON = page.getByRole('link', { name: 'Logout' });
    }

    async enterEmail(email: string) {
        await this.EMAIL_INPUT.fill(email);
    }

    async enterPassword(password: string) {
        await this.PASSWORD_INPUT.fill(password);
    }

    async clickLogin() {
        await this.LOGIN_BUTTON.click();
    }
    

    async isLogoutButtonVisible(text: string) {
        await expect(this.LOGOUT_BUTTON).toHaveText(text);
    }
}