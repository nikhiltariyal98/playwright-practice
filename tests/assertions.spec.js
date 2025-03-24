import {test,expect} from '@playwright/test'

test('locators', async ({page}) =>{


await page.goto('https://www.demoblaze.com/index.html')

await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

// hard assertion code execution will stop if failed
await expect(page).toHaveTitle('STORE')

// Soft assertion code execution will continue even if failed
await expect.soft(page).toHaveTitle('STORE');

await expect(page.locator('#cat')).toBeVisible()

})