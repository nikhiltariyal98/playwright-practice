import {test,expect} from '@playwright/test'

test('pagescreenshot',async ({page})=>
{
    await page.goto('https://playwright.dev/')
    await page.screenshot({path: 'tests/Folder/' + Date.now() +'Visiblescreenshot.png'})

})

test('fullpagescreenshot',async ({page})=>
{
    await page.goto('https://playwright.dev/')
    await page.screenshot({path: 'tests/Folder/' + Date.now() +'FullPageScreenshot.png',fullPage:true})


})

test.only('element screenshot',async ({page})=>
{
    await page.goto('https://playwright.dev/')
    await page.locator('//*[@src="img/logos/Browsers.png"]').screenshot({path: 'tests/Folder/'+ Date.now() + 'elementScreeshot.png' })    

})