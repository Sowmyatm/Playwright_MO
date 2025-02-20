const{test,expect}=require('@playwright/test')
const exp = require('constants')

//to skip test we use test.skip, to execute particular test, we use test.only

test.skip("sample_program",async function({page}){

    expect(100).toBe(100)
}
)

test("my second test", async function ({page}){
    expect(101.2).toBe(100)
})

test("My third test",async function({page}) 
{
    expect("My name is Sowmya").toContain("name")
})

test("my fourth test", async function({page}){
    expect(true).toBeTruthy
})
test("my fifth test", async function({page}){
    expect(false).toBeFalsy
})

test("my sixth test", async function({page}){
    expect("Sowmya gowda".includes("gowda")).toBeTruthy()
})