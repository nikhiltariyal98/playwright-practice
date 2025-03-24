import {test,expect} from '@playwright/test'

test('frames',async ({page})=>
{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_3.html'})
    
    await frame3.locator('//*[@name ="mytext3"]').fill('nikhil');
    
    const innerframe = await frame3.childFrames()
    await innerframe[0].locator('//*[@id="i21"]').check();
    
    await page.waitForTimeout(5000);

})