import {test,expect} from '@playwright/test'

test('uploadSingleFile', async ({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/')

   const singleFile = await page.locator('(//input[@type="file"])[1]')
   await singleFile.setInputFiles('tests/Folder/SDET_NIKHIL.pdf')
   
    const uploadFile = await page.locator('(//button[@type="submit"])[1]')
    await uploadFile.click();
   
    await page.waitForTimeout(5000)


}
)
test('uploadMultipleFiles', async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const multipleFile = await page.locator('(//input[@type="file"])[2]')
    await multipleFile.setInputFiles(['tests/Folder/SDET_NIKHIL.pdf','tests/Folder/A.pdf'])
   
    const uploadFile = await page.locator('(//button[@type="submit"])[2]')
    await uploadFile.click();
    await page.waitForTimeout(5000)
}
)
