import {Page, Locator} from '@playwright/test'

export class ProductPage { //representa a pagina de produtos

    readonly page: Page;
    readonly searchInput: Locator;
    readonly productCards: Locator;
    constructor (page:Page) { // colocando o que vai ser exportado e os locators
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search');
        this.productCards = page.locator('.card');

    }

    async goto () {

        await this.page.goto('/');

    }

    async searchProduct(product:string) {

        await this.searchInput.fill(product);
    }

    async openProduct(productName:string) {

        await this.page.getByRole('link', {name: productName}).click()
    }

    async addProductsToCart(productName: string) {

        const product = this.productCards.filter(
            {hasText: productName}
        )

        await product.getByRole('button', {name: '/add to cart/i'}).click(); // adiciona ao carrinho
    }
}