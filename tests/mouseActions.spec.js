import {test,expect} from '@playwright/test'

test('mouseaction',async ({page})=>
{
    await page.goto('https://gotranscript.com/text-compare')

    // const desktop = await page.locator('(//*[@data-bs-toggle="dropdown"])[4]')
    // const option = await page.locator('//*[@href="https://demo.opencart.com/en-gb/catalog/desktops/mac"]')
    // Hover
    // await desktop.hover()
    // await option.hover()

    // Right click
    // const right = await page.locator('//*[@class="context-menu-one btn btn-neutral"]')
    // await right.click({button:'right'});

    // const v = await page.locator('#draggable')
    // // doubleclick
    // await v.dblclick();
    // expect(page.locator('#field2')).toHaveValue('Hello World!')
    

 
    // await page.dragAndDrop('#draggable','#droppable')
    // expect(await page.locator('#droppable')).toHaveText('Dropped!')
    // await page.waitForTimeout(3000);

    // keyboard actions
    await page.fill('[name="text1"]','My name is nikhil')
    await page.keyboard.press('Meta+A')
    await page.keyboard.press('Meta+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Meta+V')
    await page.waitForTimeout(3000)

})