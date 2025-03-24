import {test,expect} from '@playwright/test'

let page;

test.beforeEach(async ({browser})=>
{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.click('#login2')

    await page.fill('#loginusername','pavanol')

    await page.fill('#loginpassword','test@123')
    await page.click('button:has-text("Log in")')

    const logoutLink = await page.locator('#logout2')

    await expect(logoutLink).toBeVisible()


}
)

test.afterEach(async()=>{
    //Log out
    await page.locator('#logout2').click()
    await expect(await page.locator('#login2')).toBeVisible()
}
)


test('Login ', async ({page})=>
{
    //Home Page
    
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
});
