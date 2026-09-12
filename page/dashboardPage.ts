import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly products: Locator;
  readonly viewPageProductName: Locator;
  readonly viewPageProductPrice: Locator;
  readonly addToCartMessage: Locator;
  readonly cart: Locator;
  homePageProductPrice: string;

  constructor(page: Page) {
    this.page = page;
    this.products = this.page.locator('div.card-body');
    this.homePageProductPrice = "";
    this.viewPageProductName = this.page.locator(".rt1-text h2");
    this.viewPageProductPrice = this.page.locator(".rt1-text h3");
    this.addToCartMessage = this.page.locator("#toast-container");
    this.cart = this.page.locator('[routerlink="/dashboard/cart"]');
  }

  // Methods
  async viewAndAddProduct(productName: string, index: number) {
    // Wait for at least one product to display on the page
    await this.products.first().waitFor();
    const countOfProduct = await this.products.count();
    console.log(`Total products found: ${countOfProduct}`);

    // Iterate through the product list
    for (let i = 0; i < countOfProduct; i++) {
      const currentProduct = this.products.nth(i);
      const productText = await currentProduct.locator("b").textContent();

      if (productText?.trim().toLowerCase() === productName.trim().toLowerCase()) {
        this.homePageProductPrice = await currentProduct.locator('div.text_muted').innerText();
        await currentProduct.locator('button').nth(index).click();
        break;
      }
    }
  }
} 