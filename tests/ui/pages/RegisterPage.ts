import { Page, Locator } from '@playwright/test';
import {BasePage} from './BasePage';

// Interface defining the required registration details
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

// Page Object Model for the user registration flow
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

    // Constructor initializes the page and all element locators
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

    // Accepts consent to allow registration to proceed
    async registerNewUser() {
        await this.ACCEPT_CONSENT.click();
    }

    // Enters the user's name in the signup form
    async enterName(name: string) {
        await this.NAME_INPUT.fill(name);
    }

    // Enters the user's email address in the signup form
    async enterEmail(email: string) {
        await this.EMAIL_INPUT.fill(email);
    }

    // Clicks the Signup button to proceed to account details form
    async clickSignup() {
        await this.SIGNUP_BUTTON.click();
    }

     // Enters the account password
    async enterPassword(password: string) {
        await this.PASSWORD_INPUT.fill(password);
    }

    // Enters the user's first name
    async enterFirstName(firstName: string) {
        await this.FIRSTNAME_INPUT.fill(firstName);
    }

    // Enters the user's last name
    async enterLastName(lastName: string) {
        await this.LASTNAME_INPUT.fill(lastName);
    }

    // Enters the primary address
    async enterAddress1(address1: string) {
        await this.ADDRESS1_INPUT.fill(address1);
    }

    // Selects a country from the dropdown
    async selectCountry(country: string) {
        await this.COUNTRY_SELECT.selectOption(country);
    }

    // Enters the state
    async enterState(state: string) {
        await this.STATE_INPUT.fill(state);
    }

    // Enters the city
    async enterCity(city: string) {
        await this.CITY_INPUT.fill(city);
    }

    // Enters the zipcode
    async enterZipcode(zipcode: string) {
        await this.ZIPCODE_INPUT.fill(zipcode);
    }

    // Enters the mobile number
    async enterMobileNumber(mobileNumber: string) {
        await this.MOBILE_NUMBER_INPUT.fill(mobileNumber);
    }

    // Fills the entire registration form using a single data object
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

    // Submits the registration form
    async clickCreateAccount() {
        await this.CREATE_ACCOUNT_BUTTON.click();
    }

    // Verifies that the account creation confirmation message is visible
    async verifyAccountCreation() {
        await this.ACCOUNT_CREATION_MSG.isVisible();
    }
}