import { test, expect } from '@playwright/test';
import { SearchProductPage } from './pages/SearchProductPage';
import { openUrl } from './utils/helpers';

// Test case: Verify that products can be searched successfully
test('Product search flow', async ({ page }) => {
  // Initialize SearchProduct page object
  const searchProductPage = new SearchProductPage(page);
  // Navigate to the products page
  await openUrl(page, '/products');
  // Handle any consent or modal dialog pop-up if present
  await searchProductPage.handleDialog();
  // Array of product names to search for
  const searchInput = ['Blue Top', 'Stylish Dress', 'Fancy Green Top'];
  // Loop through each product name and perform search
  for (const term of searchInput) {
    await searchProductPage.handleDialog();
    await searchProductPage.enterSearchProduct(term);
    await searchProductPage.clickSearch();

    // Verify that the search results for the product are displayed
    expect(await searchProductPage.isSearchResultsVisible());
  }
});
