import { Page, Locator } from '@playwright/test';
import {BasePage} from './BasePage';

export class SearchProductPage extends BasePage {
    private SEARCH_INPUT: Locator;
    private SEARCH_BUTTON: Locator;
    private SEARCH_RESULTS: Locator;

    constructor(page: Page){
        super(page);
        this.SEARCH_INPUT = page.getByRole('textbox', { name: 'Search Product' });
        this.SEARCH_BUTTON = page.locator('#submit_search');
        this.SEARCH_RESULTS = page.getByText('Blue Top').nth(1);
    }

    async enterSearchProduct(productName: string){
        await this.SEARCH_INPUT.waitFor({ state: 'visible' });
        await this.SEARCH_INPUT.fill('');
        await this.SEARCH_INPUT.fill(productName);
    }

    async clickSearch(){
        await this.SEARCH_BUTTON.click();
    }

    async isSearchResultsVisible(): Promise<boolean> {
        return await this.SEARCH_RESULTS.isVisible();
    }
}