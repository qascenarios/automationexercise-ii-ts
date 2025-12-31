import { Page, Locator } from '@playwright/test';
import {BasePage} from './BasePage';

// Page Object Model for product search functionality
export class SearchProductPage extends BasePage {
    // Locators for search-related elements
    private SEARCH_INPUT: Locator;
    private SEARCH_BUTTON: Locator;
    private SEARCH_RESULTS: Locator;

    constructor(page: Page){
        // Constructor initializes the page and element locators
        super(page);
        this.SEARCH_INPUT = page.getByRole('textbox', { name: 'Search Product' });
        this.SEARCH_BUTTON = page.locator('#submit_search');
        this.SEARCH_RESULTS = page.getByText('Blue Top').nth(1);
    }

    // Search input field for entering product name
    async enterSearchProduct(productName: string){
        await this.SEARCH_INPUT.waitFor({ state: 'visible' });
        // Clear the input before typing to avoid leftover values
        await this.SEARCH_INPUT.fill('');
        await this.SEARCH_INPUT.fill(productName);
    }

    // Search button to submit the search query
    async clickSearch(){
        await this.SEARCH_BUTTON.click();
    }

     // Checks whether the search results are visible
    async isSearchResultsVisible(): Promise<boolean> {
        return await this.SEARCH_RESULTS.isVisible();
    }
}