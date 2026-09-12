import{test,expect}from '@playwright/test'
import{LoginPage}from '../page/loginPage'
import{DashboardPage} from '../page/dashboardPage'

const url ='https://rahulshettyacademy.com/client/#/auth/login'
let email ='digere4887@neowd.com'
let password= 'Test@1234'
let productName=" ADIDAS ORIGINAL"

let lp:LoginPage
let dp: DashboardPage
test.beforeEach(async ({page})=>{
    lp=new LoginPage(page)
    dp=new DashboardPage(page)
    await lp.launchUrl(url)
     await lp.loginIntoApplication(email,password)
        await expect(lp.homePageIdentifier).toBeVisible()
})
test('Add the item to cart',async()=>{
    await dp.viewAndAddProduct(productName,1)
    await expect(dp.addToCartMessage).toHaveText('Product Added to Cart')
})

test('View the item',async()=>{
    await dp.viewAndAddProduct(productName,1)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
    })

