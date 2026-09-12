/*types of hooks
1) test.beforeAll()-- Db connection,initiate reports,logs

2) test.beforeEach()--it will run before every test case
ex-any preconditions like login url

3) test.afterEach()-- it will run after every test case
ex-logout,validation

4) test.afterAll() --will run after every test case is executed
ex-closing dbconnection,log file,report generation

execution flow of the hooks:-
1 2 3 4
*/

import{test} from '@playwright/test'
test.afterAll(async() =>{
    console.log('after all')
})
test.beforeEach(async() =>{
    console.log('before Each')
})
test.beforeAll(async() =>{
    console.log('before all')
})
test.afterEach(async() =>{
    console.log('after each')
})
test('testcase 1',async()=>{
    console.log('testcase 1')
})
test('testcase 2',async()=>{
    console.log('testcase 2')
})
test('testcase 3',async()=>{
    console.log('testcase 3')
})