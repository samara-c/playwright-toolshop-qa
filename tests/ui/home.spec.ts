import { test, expect } from '@playwright/test';
import { userCredentials, productHammer, productThorHammer, searchOptions } from '../data/test-data';
import { generateUserName } from '../utils/strings';

test('open the page and validate search menu exists', async ({ page }) => {

    await page.goto('/');
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.')
    await expect(page.getByRole('button', { name : 'Search'})).toBeVisible();

});

test ('search for a product', async ({page}) => {

    await page.goto('/');
    const busca = page.getByPlaceholder('Search');
    await busca.fill(searchOptions.term);
    await busca.press('Enter');
})

test ('search for hammer', async ({page}) => {

    await page.goto('/');
    const busca = page.getByPlaceholder('Search');
    await busca.fill(productThorHammer.name);
    await page.getByRole('button', {name : 'Search'}).click();
    expect(page.getByText('Searched for: Thor Hammer'));
    await expect(page.locator('.card-title')).toBeVisible();
    page.getByRole('heading', {name: 'Thor Hammer'});



})

test ('strict mode violation', async ({page}) => {

    await page.goto('/');
    await expect(page.getByText('Hammer')).toBeVisible();


})

test ('strict mode test fix', async ({page}) => {

    await page.goto('/');
    await expect(page.getByRole('heading', {name : 'Hammer', exact: true})).toBeVisible();
})