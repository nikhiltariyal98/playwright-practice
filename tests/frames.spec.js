import {test,expect} from '@playwright/test'

test('frames',async ({page})=>
{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const allframes = await page.frames()
//////////
    //using name/url of the frame
    //approach 1
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });  
    // await frame1.locator('//*[@name ="mytext1"]').fill('nikhil');

    //approach 2
    const frame1 = await page.frameLocator('frame[src="frame_1.html"]')
    await frame1.locator('//*[@name ="mytext1"]').fill('nikhil');
    await page.waitForTimeout(3000)
    
})