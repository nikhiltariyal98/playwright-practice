import {test,expect} from '@playwright/test'

test('selectRadioCheckBox',async ({page})=>
{
await page.goto('https://artoftesting.com/samplesiteforselenium')


// Input button:- is enabled,disabled,editable,tobeVisible,Empty
// Radio buttons check
// await page.locator('#male').check()
// await expect(await page.locator('#male')).toBeChecked();
// await expect(await page.locator('#male').isChecked()).toBeTruthy()
// await expect(await page.locator('#female').isChecked()).toBeFalsy()

// singlecheckbox
// await page.locator('//input[@value="Automation"]').check();

// expect(await page.locator('//input[@value="Automation"]')).toBeChecked()
// expect(await page.locator('//input[@value="Automation"]').isChecked()).toBeTruthy()



//multiplecheckboxes
const checkboxOptions = [
    '//input[@value="Automation"]',
    '//input[@value="Performance"]'
    ]

for(const i of checkboxOptions)    // select multiple checkboxes
{
    await page.locator(i).check();
}
await page.waitForTimeout(10000);
for(const i of checkboxOptions) //deselect multiple checkboxes
{
    if(await page.locator(i).isChecked())
    {
        await page.locator(i).uncheck()
    }
}

await page.waitForTimeout(10000);

})