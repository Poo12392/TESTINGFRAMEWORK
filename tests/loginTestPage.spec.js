import{test,expect}from '@playwright/test'
import{LoginPage}from '../page/loginPage'

//first time lets perform action using hard coded value

const url ='https://rahulshettyacademy.com/client/#/auth/login'
let email ='digere4887@neowd.com'
let password= 'Test@1234'
let errorMessage= 'Incorrect email or password'
let invalidPassword='ssfghjuyu'

let lp
test.beforeEach(async ({page}) =>{
    lp=new LoginPage(page)
     await lp.launchUrl(url)
  
})

//For Valid Login
test('Login using valid credentials',async({page})=>{
    //const lp =new LoginPage(page)
       // await lp.launchUrl(url)
        await lp.loginIntoApplication(email,password)
        await expect(lp.homePageIdentifier).toBeVisible()

})

test('Login using Invalid credentials',async({page})=>{
    //const lp =new LoginPage(page)
        //await lp.launchUrl(url)
        await lp.loginIntoApplication(email,invalidPassword)
        await expect(lp.errorMessage).toBeVisible()
    })

