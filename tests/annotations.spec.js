import {test,expect} from '@playwright/test'

test('test1', async ({page}) =>{

    console.log('test1')


})
test('test2', async ({page,browserName}) =>{

    console.log('test1')
    if(browserName == 'chromium')
    {
        test.skip()
    }


})

test('test3', async({page})=>
{
    test.fixme()
    console.log('test3')

}
)