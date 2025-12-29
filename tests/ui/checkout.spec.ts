import {test} from '@playwright/test';
import {AddProductToCartPage} from './pages/AddProductToCartPage';
import {SearchProductPage} from './pages/SearchProductPage';
import {CheckoutPage} from './pages/CheckoutPage';
import {LoginPage} from './pages/LoginPage';
import {loginData} from './utils/testDate/auth';
import {openUrl} from './utils/helpers';

test('Add product to cart flow', async ({page}) => {
    const loginPage = new LoginPage(page);
    const addProductToCartPage = new AddProductToCartPage(page);
    const searchProductPage = new SearchProductPage(page);
    const checkoutPage = new CheckoutPage(page);    

    await openUrl(page, '/login');
    await addProductToCartPage.handleDialog();
    // Login steps
    await loginPage.enterEmail(loginData.email);
    await loginPage.enterPassword(loginData.password);
    await loginPage.clickLogin();

    // Add product to the cart
    await addProductToCartPage.navigateToProductsPage();
    const searchInput = ['Blue Top', 'Stylish Dress', 'Fancy Green Top'];
    for (const term of searchInput) {
      await addProductToCartPage.handleDialog();
      await searchProductPage.enterSearchProduct(term);
      await searchProductPage.clickSearch();
      await addProductToCartPage.addFirstProductToCart();
      await addProductToCartPage.clickContinueShopping();
    }
    await addProductToCartPage.viewCart()

    await checkoutPage.proceedToCheckout();
    await checkoutPage.placeOrder();
    await checkoutPage.enterCardDetails(
        "Test user",
        "4111111111111111",
        "456",
        "05",
        "2025"
    );
    await checkoutPage.payAndConfirmOrder();

    // Verify order confirmation
    await checkoutPage.isSuccessMessageVisible();

});