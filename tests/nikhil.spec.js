import {test,expect} from '@playwright/test';


// Multiple elements
test('multipleElements',async ({page})=>{
    
await page.goto('https://www.demoblaze.com/index.html');
const links = await page.$$('a');

for(const link of links)
{
    const text = await link.textContent();
    console.log(text);
}
})
