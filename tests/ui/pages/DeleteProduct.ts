import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DeletePage extends BasePage {
  private DELETE_PRODUCT_BUTTON: Locator;
  private PRODUCT_NAMES: Locator;

  constructor(page: Page) {
    super(page);
    this.DELETE_PRODUCT_BUTTON = page.locator('.cart_quantity_delete');
    this.PRODUCT_NAMES = page.locator('td.cart_description h4 a');
  }

  /**
   * Delete products from the cart by their names.
   * @param productNamesToDelete Array of product names to delete
   */
  async deleteProductFromCart(productNamesToDelete: string[]): Promise<void> {
    for (const nameToDelete of productNamesToDelete) {
      const cartProducts = await this.PRODUCT_NAMES.allTextContents();

      if (!cartProducts.includes(nameToDelete)) {
        console.log(`Product not found in cart: ${nameToDelete}`);
        continue;
      }

      const index = cartProducts.indexOf(nameToDelete);
      await this.DELETE_PRODUCT_BUTTON.nth(index).click();

      // Wait for the delete button to be visible again, indicating the product has been removed
      await this.DELETE_PRODUCT_BUTTON.nth(index).waitFor({ state: 'visible' });
    }
  }
}
