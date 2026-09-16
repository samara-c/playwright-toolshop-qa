import { test, expect } from '@playwright/test';
import { userCredentials, product, searchOptions } from '../data/test-data';
import { generateUserName } from '../utils/strings';

test('open the page and validate search menu exists', async ({ page }) => {

    await page.goto('/');
    await expect(page).toHaveTitle('')
    await expect(page.getByRole('button', { name : 'Search'})).toBeVisible();

});

test ('search for a product', async ({page}) => {

    await page.goto('/');
    const busca = page.getByPlaceholder('Search');
    await busca.fill(searchOptions.term);
    await busca.press('Enter');
})