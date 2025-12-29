import {test, expect} from '@playwright/test';
import {AddProductToCartPage} from './pages/AddProductToCartPage';
import {SearchProductPage} from './pages/SearchProductPage';
import {openUrl} from './utils/helpers';

test('Add product to cart flow', async ({page}) => {
    const addProductToCartPage = new AddProductToCartPage(page);
    const searchProductPage = new SearchProductPage(page);

    await openUrl(page, '/products');

    // Search for products and add the first one to the cart
    const searchInput = ['Blue Top', 'Stylish Dress', 'Fancy Green Top'];
    for (const term of searchInput) {
        await addProductToCartPage.handleDialog();
        await searchProductPage.enterSearchProduct(term);
        await searchProductPage.clickSearch();
        await addProductToCartPage.addFirstProductToCart();
        await addProductToCartPage.clickContinueShopping();
    }
    
    await addProductToCartPage.viewCart();

    // Verify that the product is added to the cart
    await expect(addProductToCartPage.CART_ITEMS).toHaveCount(3);
});