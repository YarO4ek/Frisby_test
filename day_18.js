const API_KEY = "PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4";
const apiId = "9a9be353-81ad-4627-997b-04cdd4e75466";
const URL = "https://api.getpostman.com/apis";
const frisby = require("frisby");

describe('d18', () => {
    it('Submit API', async function () {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        'x-api-key': API_KEY,
                    }
                }
            })
            .get(`${URL}/${apiId}`)
            .expect('status', 200)
            .expect('json', 'api.name', 'Cosmos')
            .expect('json', 'api.id', apiId)
        console.log(result);

    });
});;