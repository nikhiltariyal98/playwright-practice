import {test,expect} from '@playwright/test'

test('tables',async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    // Total number of rows and columns
    const columns = await table.locator('thead tr th')
    // expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    // expect(await rows.count()).toBe(5)

    // select checkbox for Smartphone


    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // }
    // )
    // matchedRow.locator('input').check()
    
    // await page.waitForTimeout(5000);
    
    // await selectProduct(rows,page,'Smartwatch')
    // await selectProduct(rows,page,'Smartphone')
    // Print data from the first page
    // for(let i=0;i<await rows.count();i++)
    // {
    //     const row = rows.nth(i);
    //     const data = await row.locator('td')
    //     for(let j=0;j<await data.count()-1;j++)
    //     {
    //         console.log(await data.nth(j).textContent())
    //     }
    // }

    // Print data from all the pagination pages
    const totalPages = await page.locator('//*[@id = "pagination"]//li')

    for(let p = 0;p< await totalPages.count();p++)
    {
        if(p>0)
        {
            await totalPages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++)
        {
            const row = rows.nth(i);
            const data = await row.locator('td')
            for(let j=0;j<await data.count()-1;j++)
            {
                console.log(await data.nth(j).textContent())
            }
        }
        await page.waitForTimeout(5000)

    }
    
})

// async function selectProduct(tr,page,prodname)
// {
//     const matchedRow = tr.filter({
//         has :page.locator('td'),
//         hasText: prodname
//     })
//     await matchedRow.locator('input').check()
// }
