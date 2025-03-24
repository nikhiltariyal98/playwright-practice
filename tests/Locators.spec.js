// const {test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('locators', async ({page}) =>{


await page.goto('https://www.demoblaze.com/index.html')

await page.click('#login2')

await page.fill('#loginusername','pavanol')

await page.fill('#loginpassword','test@123')
await page.click('button:has-text("Log in")')

const logoutLink = await page.locator('#logout2')

await expect(logoutLink).toBeVisible()

await page.close()

})