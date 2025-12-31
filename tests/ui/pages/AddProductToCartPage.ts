import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddProductToCartPage extends BasePage {
  // Locators for elements used on the page
  private PRODUCTS_PAGE_LINK: Locator;
  private FIRST_PRODUCT_ADD_TO_CART_BUTTON: Locator;
  private CONTINUE_SHOPPING_BUTTON: Locator;
  private VIEW_CART_BUTTON: Locator;
  private CART_ITEMS: Locator;

  // Constructor initializes the page and element locators
  constructor(page: Page) {
    super(page);
    this.PRODUCTS_PAGE_LINK = page.getByRole('link', { name: 'Products' });
    this.FIRST_PRODUCT_ADD_TO_CART_BUTTON = page.getByText('Add to cart').first();
    this.CONTINUE_SHOPPING_BUTTON = page.getByRole('button', { name: 'Continue Shopping' });
    this.VIEW_CART_BUTTON = page.getByRole('link', { name: 'Cart' });
    this.CART_ITEMS = page.locator('td.cart_description h4 a');
  }

  // Navigates to the Products page
  async navigateToProductsPage() {
    await this.PRODUCTS_PAGE_LINK.waitFor({ state: 'visible' });
    await this.PRODUCTS_PAGE_LINK.click();
  }

   // Adds the first available product to the cart
  async addFirstProductToCart() {
    await this.FIRST_PRODUCT_ADD_TO_CART_BUTTON.click();
  }

  // Clicks "Continue Shopping" after a product is added
  async clickContinueShopping() {
    await this.CONTINUE_SHOPPING_BUTTON.waitFor({ state: 'visible' });
    await this.CONTINUE_SHOPPING_BUTTON.click();
  }

  // Opens the Cart page
  async viewCart() {
    await this.VIEW_CART_BUTTON.waitFor({ state: 'visible' });
    await this.VIEW_CART_BUTTON.click();
  }

  // Returns the number of products currently in the cart
  async isProductInCart() {
    const numberOfItems = await this.CART_ITEMS.count();
    return numberOfItems;
  }
}
