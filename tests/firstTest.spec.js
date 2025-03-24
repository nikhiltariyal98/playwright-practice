const {test, expect} = require('@playwright/test');


// const playwright = require('@playwright/test');
// const test = playwright.test;
// const expect = playwright.expect;

//Title,anaonymous function
test('Title',async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    const title = await page.title();  
    console.log("page title is : ",title);
    await expect(page).toHaveTitle('STORE');
    const pageURL =  await page.url();
    console.log('page url is : ',pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close()


});