import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {
  }
  async handleDialog() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });

    try {
      // Wait briefly for cookie banner (non-blocking)
      await consentButton.waitFor({ state: 'visible', timeout: 3000 });
      await consentButton.click();
    } catch {
      // Cookie banner did not appear — continue safely
    }
  }

}
