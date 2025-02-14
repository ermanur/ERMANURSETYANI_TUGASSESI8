const assert = require("assert");

describe('Get List User', function(){
    it('User get detail Booking should be sucess', async function () {
       
        this.timeout(10000)
        const response = await fetch ('https://reqres.in/api/users?page=2')
        const responsedata=await response.json()
        console.log("Response : " + JSON.stringify(responsedata, null, 1));
        assert.strictEqual(response.status, 200, "Status harus 200");
    })
    it('User get invalid detail Booking should be success', async function () {
        this.timeout(10000)
        const response = await fetch('https://reqres.in/api/users?page=888888888')

        const Responsedata = await response.json()
        console.log("Response : " + JSON.stringify(Responsedata, null, 1));
        assert.strictEqual(response.status, 200, "Status harus 200");

    })
})