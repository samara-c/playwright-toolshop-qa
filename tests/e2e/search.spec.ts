import {test, expect} from '@playwright/test'
import { productHammer } from '../data/test-data';

test ('search for a valid term', async ({page}) => {

    await page.goto('/');
    const searchField = page.getByPlaceholder('Search')
    await searchField.fill(productHammer.name)
    const searchButton = page.getByRole('button', { name: 'Search'});
    await searchButton.click();
    await expect(page.getByText(productHammer.name, {exact: true})).toBeVisible()
})