import { Page, Locator } from '@playwright/test';
import {BasePage} from './BasePage';

interface RegistrationDetails {
  password: string;
  firstName: string;
  lastName: string;
  address1: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export class RegisterPage extends BasePage {

    private ACCEPT_CONSENT: Locator;
    private NAME_INPUT: Locator;
    private EMAIL_INPUT: Locator;
    private SIGNUP_BUTTON: Locator;
    private PASSWORD_INPUT: Locator;
    private FIRSTNAME_INPUT: Locator;
    private LASTNAME_INPUT: Locator;
    private ADDRESS1_INPUT: Locator;
    private COUNTRY_SELECT: Locator;
    private STATE_INPUT: Locator;
    private CITY_INPUT: Locator;
    private ZIPCODE_INPUT: Locator;
    private MOBILE_NUMBER_INPUT: Locator;
    private CREATE_ACCOUNT_BUTTON: Locator;
    private ACCOUNT_CREATION_MSG: Locator;

    constructor(page: Page) {
        super(page);
        this.ACCEPT_CONSENT = page.getByRole('button', { name: 'Consent' });
        this.NAME_INPUT = page.getByRole('textbox', { name: 'Name' });
        this.EMAIL_INPUT = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.SIGNUP_BUTTON = page.getByRole('button', { name: 'Signup' });
        this.PASSWORD_INPUT = page.getByRole('textbox', { name: 'Password *' });
        this.FIRSTNAME_INPUT = page.getByRole('textbox', { name: 'First name *' });
        this.LASTNAME_INPUT = page.getByRole('textbox', { name: 'Last name *' });
        this.ADDRESS1_INPUT = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.COUNTRY_SELECT = page.getByLabel('Country *');
        this.STATE_INPUT = page.getByRole('textbox', { name: 'State *' });
        this.CITY_INPUT = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.ZIPCODE_INPUT = page.locator('#zipcode');
        this.MOBILE_NUMBER_INPUT = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.CREATE_ACCOUNT_BUTTON = page.getByRole('button', { name: 'Create Account' });
        this.ACCOUNT_CREATION_MSG = page.getByText('Account Created!');
    }

    async registerNewUser() {
        await this.ACCEPT_CONSENT.click();
    }

    async enterName(name: string) {
        await this.NAME_INPUT.fill(name);
    }

    async enterEmail(email: string) {
        await this.EMAIL_INPUT.fill(email);
    }

    async clickSignup() {
        await this.SIGNUP_BUTTON.click();
    }

    async enterPassword(password: string) {
        await this.PASSWORD_INPUT.fill(password);
    }

    async enterFirstName(firstName: string) {
        await this.FIRSTNAME_INPUT.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.LASTNAME_INPUT.fill(lastName);
    }

    async enterAddress1(address1: string) {
        await this.ADDRESS1_INPUT.fill(address1);
    }

    async selectCountry(country: string) {
        await this.COUNTRY_SELECT.selectOption(country);
    }

    async enterState(state: string) {
        await this.STATE_INPUT.fill(state);
    }

    async enterCity(city: string) {
        await this.CITY_INPUT.fill(city);
    }

    async enterZipcode(zipcode: string) {
        await this.ZIPCODE_INPUT.fill(zipcode);
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.MOBILE_NUMBER_INPUT.fill(mobileNumber);
    }

    async fillRegistrationForm(details: RegistrationDetails) {
        await this.enterPassword(details.password);
        await this.enterFirstName(details.firstName);
        await this.enterLastName(details.lastName);
        await this.enterAddress1(details.address1);
        await this.selectCountry(details.country);
        await this.enterState(details.state);
        await this.enterCity(details.city);
        await this.enterZipcode(details.zipcode);
        await this.enterMobileNumber(details.mobileNumber);
    }

    async clickCreateAccount() {
        await this.CREATE_ACCOUNT_BUTTON.click();
    }

    async verifyAccountCreation() {
        await this.ACCOUNT_CREATION_MSG.isVisible();
    }
}