import { test, expect } from '@playwright/test';

test('open the page and validate search menu exists', async ({ page }) => {

    await page.goto('/');
    await expect(page.getByRole('button', { name : 'Search'})).toBeVisible();

});