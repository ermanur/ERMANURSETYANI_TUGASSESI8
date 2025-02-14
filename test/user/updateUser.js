const assert = require("assert");

describe('Update User', function(){
    it('Update user should be sucess', async function () {
       
        this.timeout(10000)
        const url = 'https://reqres.in/api/users/2'
        const requestData={
            "name": "Erma Nursetyani Ningrat Kraton",
        }
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API
        console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 201
        assert.strictEqual(response.status, 200, "Status harus 200");
    })
})