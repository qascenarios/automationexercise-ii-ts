import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { openUrl } from './utils/helpers';
import { loginData } from './utils/testDate/auth';
import { AddProductToCartPage } from './pages/AddProductToCartPage';
import { DeletePage } from './pages/DeleteProduct';
import { SearchProductPage } from './pages/SearchProductPage';

test('Delete products from cart flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addProductToCartPage = new AddProductToCartPage(page);
  const searchProductPage = new SearchProductPage(page);
  const deletePage = new DeletePage(page);

  await openUrl(page, '/login');
  await loginPage.handleDialog();

  await loginPage.enterEmail(loginData.email);
  await loginPage.enterPassword(loginData.password);
  await loginPage.clickLogin();

  // Search for products and add the first one to the cart
    const searchInput = ['Winter Top', 'Stylish Dress', 'Fancy Green Top', 'Men Tshirt'];
    for (const term of searchInput) {
        await addProductToCartPage.handleDialog();
        await addProductToCartPage.navigateToProductsPage();
        await searchProductPage.enterSearchProduct(term);
        await searchProductPage.clickSearch();
        await addProductToCartPage.addFirstProductToCart();
        await addProductToCartPage.clickContinueShopping();
    }

    // Navigate to cart page
  await addProductToCartPage.viewCart()
    // Delete all products from the cart
  const productsToDelete = ["Winter Top", "Stylish Dress", "Fancy Green Top"];
  await deletePage.deleteProductFromCart(productsToDelete);

    // Verify that the products are deleted from the cart
  await addProductToCartPage.viewCart();
  expect(await addProductToCartPage.isProductInCart()).toBe(1);
});
