const assert = require("assert");

describe("Delete User", function () {
  it("Seharusnya menghapus user dan mengembalikan status 204", async function () {
    this.timeout(10000); // Timeout agar Mocha tidak gagal karena request lambat

    try {
      // Kirim request DELETE ke API
      const response = await fetch("https://reqres.in/api/users/2", {
        method: "DELETE", // HARUS menambahkan method DELETE
      });

      // Pastikan statusnya 204 (No Content)
      assert.strictEqual(response.status, 204, "Status harus 204");

      // Tidak perlu response.json() karena 204 tidak memiliki body
    } catch (error) {
      assert.fail(`Request gagal: ${error.message}`);
    }
  });
});
