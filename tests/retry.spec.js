import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('retry',async ({page})=>
{

    const obj = new LoginPage(page)
    await obj.goToLoginPage()
    await obj.login('nikhil', 'tariyal')
    await page.locator('djasgds').click()
    await page.waitForTimeout(5000)


}
)