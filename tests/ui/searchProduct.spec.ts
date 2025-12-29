import { test, expect } from '@playwright/test';
import { SearchProductPage } from './pages/SearchProductPage';
import { openUrl } from './utils/helpers';

test('Product search flow', async ({ page }) => {
  const searchProductPage = new SearchProductPage(page);

  await openUrl(page, '/products');
  await searchProductPage.handleDialog();

  
  const searchInput = ['Blue Top', 'Stylish Dress', 'Fancy Green Top'];
  for (const term of searchInput) {
    await searchProductPage.handleDialog();
    await searchProductPage.enterSearchProduct(term);
    await searchProductPage.clickSearch();
    
    // Verify that search results are displayed
    expect(await searchProductPage.isSearchResultsVisible());
  }
});
  



