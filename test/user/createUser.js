const assert = require("assert");

describe('Create List User', function(){
    it('User Create user should be sucess', async function () {
       
        this.timeout(10000)
        const url = 'https://reqres.in/api/users'
        const requestData={
            "name": "Erma Nursetyani",
            "job": "QA"
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API
        console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 201
        assert.strictEqual(response.status, 201, "Status harus 201");
    })
})