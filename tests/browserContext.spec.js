import {test,expect,chromium} from '@playwright/test'

test('Handle Pages/Windows',async ()=>
{

    //browser contains context contains multiple pages
    const browser = await chromium.launch()
    const context1 = await browser.newContext()

    //  can't navigate to page2 from page1 though they are from the context even then also

    const page1 =await context1.newPage()
    const page2 = await context1.newPage()
    const allPages = await context1.pages()
    console.log('total number of pages: ',allPages.length)

    await page1.goto('https://www.gmail.com')
    await page2.goto('https://www.google.com')
    

})

test.only('Handle multiple Pages/Windows',async ()=>
    {
    
        //browser contains context contains multiple pages
        const browser = await chromium.launch()
        const context1 = await browser.newContext()
    
        //  can't navigate to page2 from page1 though they are from the context even then also
    
        const page1 =await context1.newPage()
        await page1.goto('https://www.gmail.com')

        const pagePromise = context1.waitForEvent('page')
        await page1.locator('(//a[@href])[1]').click()
        
        const newPage = await pagePromise
        await expect(newPage).toHaveURL('https://support.google.com/chrome/answer/6130773?hl=en')
        
        await newPage.waitForTimeout(1000)
    })