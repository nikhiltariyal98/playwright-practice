import {test,expect} from '@playwright/test'

test('selectRadioCheckBox',async ({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com')

// Select multi dropdown options
// await page.selectOption('#colors',['Yellow','White','Red'])

// check number of options in dropdown
// const totalOptions = await page.$$('#colors option')
// await expect(totalOptions.length).toBe(7)

// chekc presence of option
const textOption = await page.locator('#colors option').allInnerTexts()
expect(await textOption.includes('Red')).toBeTruthy();
expect(await textOption.includes('Black')).toBeFalsy();


})