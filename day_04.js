const frisby = require("frisby");
//const api_key = 'PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4';

describe('day_04', () => {
    it('Autorization with header', function () {
        return frisby
            .setup({
                request: {
                    headers: {
                        'x-api-key': "PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4"
                    }
                }
            })
            .get("https://api.getpostman.com/collections")
            .expect('status', 200);

    });
    it ('autorization with headers', function (){
        return frisby
            .setup({
                request:{
                    headers: {
                        'x-api-key': ""
                    }
                }
            })
            .get(`https://api.getpostman.com/collections?apikey=PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4`)
            .expect ('status', 200);
    })
    // it ( 'autorization with headers and get 200 status', function (){
    //     return frisby.get("https://api.getpostman.com/collections")
    //         .expect ('status', 200);
    //
    // })

});


