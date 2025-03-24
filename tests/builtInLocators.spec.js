import {test,expect} from '@playwright/test';


// Multiple elements
test('multipleElements',async ({page})=>{
    
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const altText = await page.getByAltText('company-branding')

await expect(altText).toBeVisible();

await page.getByPlaceholder('Username','Admin');

await page.getByPlaceholder('Password','admin123');

await page.getByRole('button',{type : 'submit'}).click();

const username = await page.getByText('manda user');

await expect(username).toBeVisible();



})