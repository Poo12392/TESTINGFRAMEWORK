import { test,expect} from "@playwright/test"
import { LoginPage } from "../page/loginPage"
import { DashboardPage } from "../page/dashboardPage"
import product from '../testdata/product.json'

for(const p of product){
    //group the testcase together using test.describe
    test.describe(`test login ${p.productName}`,()=>{

let lp :LoginPage
let dp : DashboardPage

test.beforeEach(async({page})=>{
    lp=new LoginPage(page)
    dp=new DashboardPage(page)
    await lp.launchUrl(p.url)
    await lp.loginIntoApplication(p.email,p.password)
})
test (`add the item to cart ${p.productName}`,async()=>{
    await dp.viewAndAddProduct(p.productName,1)
    await expect(dp.addToCartMessage).toContainText(p.succesMessage,{ignoreCase:true})
})
test(`view the product ${p.productName}`,async()=>{
    await dp.viewAndAddProduct(p.productName,0)
    await expect(dp.viewPageProductPrice).toBeVisible()
})
    })
}


    
    