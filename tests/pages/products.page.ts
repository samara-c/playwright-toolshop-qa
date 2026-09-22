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


}