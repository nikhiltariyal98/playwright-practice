import {test,expect} from '@playwright/test'

test('AutoSuggestComplete',async ({page})=>
{

await page.goto('https://www.redbus.in')

const fromLocator = page.locator('#src')

await fromLocator.click()

await fromLocator.fill('Delhi')

await page.waitForTimeout(5000);

await page.waitForSelector('//li//text[@class="placeHolderMainText"]')


const Options = await page.$$('//li//text[@class="placeHolderMainText"]')

for(const option of Options)
{
    const optionName = await option.innerText()
    if(optionName == 'Mayur Vihar')
    {
        await option.click()
        break;
    }    // console.log(option)

}


await page.waitForTimeout(5000)
})