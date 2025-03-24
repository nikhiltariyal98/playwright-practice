import {test,expect} from '@playwright/test'

test('selectRadioCheckBox',async ({page})=>
{


await page.goto('https://artoftesting.com/samplesiteforselenium')

// Select values from dropdown
// lable is visible text in dropdown
// await page.locator('#testingDropdown').selectOption({label:'Manual Testing'})
// await page.locator('#testingDropdown').selectOption('Manual Testing')
// // value that is sent to the backend
// await page.locator('#testingDropdown').selectOption({value:'Manual'})
// await page.locator('#testingDropdown').selectOption({index:1})
// await page.selectOption('#testingDropdown','Manual Testing')

// await page.waitForTimeout(5000)
// Assertions
// check numbe rof options in drodpwn
// const options = await page.$$('#testingDropdown option')
// await expect(options.length).toBe(4)


// check presence of value in dropdwon
// const dropdownTextOptions = await page.locator('#testingDropdown option').allInnerTexts()
// await expect(dropdownTextOptions.includes('Manual Testing')).toBeTruthy();

// Select opiton from dropdown using loop
const options = await page.locator('#testingDropdown option').allInnerTexts()
for(const i of options)
{
    if(i == 'Manual Testing')
    {
        await page.selectOption('#testingDropdown',i);
        break
    }
}


})