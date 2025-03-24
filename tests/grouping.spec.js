import {test,expect} from '@playwright/test'

test.beforeAll('beforeAll',()=>{
    console.log('Before all')
})
test.afterAll('afterAll',()=>{
    console.log('After all')
})




test.describe('Sanity',()=>{


    test('1',async ({page})=>
    {
        console.log('Sanity')

    })


    test('2',async ({page})=>
        {
            console.log('Regression')
        
        })

})


test.describe.only('Regression',()=>{
    test('3',async ({page})=>
        {
            console.log('Smoke')
        
        })

    test('4',async ({page})=>
        {
            console.log('Regression')
        
        })

    test('5',async ({page})=>
        {
            console.log('Regression')
        
        })
})