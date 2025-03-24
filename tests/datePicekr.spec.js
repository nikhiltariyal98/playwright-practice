import {test,expect} from '@playwright/test'

test('datepicker',async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enter date direclt through fill
    // await page.locator('#datepicker').fill('03/01/2025');

    // await page.waitForTimeout(3000)

    // Handle datepicker
    const year = '2026'
    const month = 'March'
    const day = '3'
    await page.click('#datepicker')

    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.locator('[title="Next"]').click();
    }
    await page.locator(`//*[@data-date='${day}']`).click();
    await page.waitForTimeout(5000);

    await page.close()


    
    
})