import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    private PROCEED_TO_CHECKOUT_BUTTON: Locator;
    private PLACE_ORDER_BUTTON: Locator;
    private NAME_ON_CARD_INPUT: Locator;
    private CARD_NUMBER_INPUT: Locator;
    private CARD_CVC_INPUT: Locator;
    private CARD_EXPIRY_MONTH_INPUT: Locator;
    private CARD_EXPIRY_YEAR_INPUT: Locator;
    private PAY_AND_CONFIRM_ORDER_BUTTON: Locator;
    private SUCCESS_MESSAGE: Locator;

    constructor(page: Page){
        super(page);
        this.PROCEED_TO_CHECKOUT_BUTTON = page.locator('a.check_out');
        this.PLACE_ORDER_BUTTON = page.getByRole('link', { name: 'Place Order' });
        this.NAME_ON_CARD_INPUT = page.locator('input[name="name_on_card"]');
        this.CARD_NUMBER_INPUT = page.locator('input[name="card_number"]');
        this.CARD_CVC_INPUT = page.getByRole('textbox', { name: 'ex.' });
        this.CARD_EXPIRY_MONTH_INPUT = page.getByRole('textbox', { name: 'MM' });
        this.CARD_EXPIRY_YEAR_INPUT = page.getByRole('textbox', { name: 'YYYY' });
        this.PAY_AND_CONFIRM_ORDER_BUTTON = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.SUCCESS_MESSAGE = page.getByText('Order Placed!');
    }

    async proceedToCheckout(){
        await this.PROCEED_TO_CHECKOUT_BUTTON.click();
    }

    async placeOrder(){
        await this.PLACE_ORDER_BUTTON.click();
    }

    async enterCardDetails(nameOnCard: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string){
        await this.NAME_ON_CARD_INPUT.fill(nameOnCard);
        await this.CARD_NUMBER_INPUT.fill(cardNumber);
        await this.CARD_CVC_INPUT.fill(cvc);
        await this.CARD_EXPIRY_MONTH_INPUT.fill(expiryMonth);
        await this.CARD_EXPIRY_YEAR_INPUT.fill(expiryYear);
    }

    async payAndConfirmOrder(){
        await this.PAY_AND_CONFIRM_ORDER_BUTTON.click();
    }   
    async isSuccessMessageVisible(): Promise<boolean>{
        return await this.SUCCESS_MESSAGE.isVisible({ timeout: 5000 });
    }
}