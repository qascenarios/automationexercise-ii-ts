import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddProductToCartPage extends BasePage {
  public PRODUCTS_PAGE_LINK: Locator;
  public FIRST_PRODUCT_ADD_TO_CART_BUTTON: Locator;
  public CONTINUE_SHOPPING_BUTTON: Locator;
  public VIEW_CART_BUTTON: Locator;
  public CART_ITEMS: Locator;

  constructor(page: Page) {
    super(page);
    this.PRODUCTS_PAGE_LINK = page.getByRole('link', { name: 'Products' });
    this.FIRST_PRODUCT_ADD_TO_CART_BUTTON = page.getByText('Add to cart').first();
    this.CONTINUE_SHOPPING_BUTTON = page.getByRole('button', { name: 'Continue Shopping' });
    this.VIEW_CART_BUTTON = page.getByRole('link', { name: 'Cart' });
    this.CART_ITEMS = page.locator('td.cart_description h4 a');
  }

  async navigateToProductsPage() {
    await this.PRODUCTS_PAGE_LINK.click();
  }

  async addFirstProductToCart() {
    await this.FIRST_PRODUCT_ADD_TO_CART_BUTTON.click();
  }

  async clickContinueShopping() {
    await this.CONTINUE_SHOPPING_BUTTON.waitFor({ state: 'visible' });
    await this.CONTINUE_SHOPPING_BUTTON.click();
  }

  async viewCart() {
    await this.VIEW_CART_BUTTON.click();
  }

  async isProductInCart() {
    const numberOfItems = await this.CART_ITEMS.count();
    return numberOfItems;
  }
}
