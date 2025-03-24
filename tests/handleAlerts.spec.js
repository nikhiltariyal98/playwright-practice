import {test,expect} from '@playwright/test'

test.skip('simple alert',async ({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //enabling dialog window handler
    page.on('dialog', async dialog=>
    {
        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toBe('I am an alert box!')
        await dialog.accept()
        // await dialog.dismiss()
    }
    )

    await page.click('#alertBtn')
    await page.waitForTimeout(5000)

})
test.skip('confirmation alert',async ({page})=>
    {
    
        await page.goto('https://testautomationpractice.blogspot.com/')
    
        //enabling dialog window handler
        page.on('dialog', async popup=>
        {
            expect(popup.type()).toContain('confirm')
            expect(popup.message()).toBe('Press a button!')
            await popup.accept()
            // await popup.dismiss()
        }
        )
    
        await page.click('#confirmBtn')
        const info = await page.locator('#demo').textContent()
        expect(await page.locator('#demo').textContent()).toBe('You pressed OK!')
        await page.waitForTimeout(5000)
    
    })

    test('prompt alert',async ({page})=>
        {
        
            await page.goto('https://testautomationpractice.blogspot.com/')
        
            //enabling dialog window handler
            page.on('dialog', async popup=>
            {
                expect(popup.type()).toContain('prompt')
                expect(popup.message()).toBe('Please enter your name:')
                expect(popup.defaultValue()).toBe('Harry Potter')
                await popup.accept('Nikhil')
                // await popup.dismiss()
            }
            )
        
            await page.click('#promptBtn')
            expect (await page.locator('#demo').textContent()).toBe('Hello Nikhil! How are you today?')
            await page.waitForTimeout(5000)
        
        })