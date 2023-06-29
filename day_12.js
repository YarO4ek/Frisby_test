const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://api.getpostman.com/"
const environmentID = '18863373-ed2796af-f8e6-42e8-a019-fd8d924832a2'
const collectionID = '18863373-03e8fea3-178e-4078-9f71-ef2eccdf3336'
const workspaceID = '8c9af9bd-aec9-4457-b550-607ad55db0d1'
const API_KEY = "PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4"

frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});


describe("Day_12: Postman API", () => {
    it("GET a collection", function (){
        return frisby
            .get(`${BASE_URL}collections/${collectionID}`, {headers:{
                    "x-api-key": API_KEY,
                }})
            .expect("status", 200)
            .expect("jsonTypes", "collection.info", {"name": "Day 12: Postman API"})
    });

    it("GET an environment", function (){
        return frisby
            .get(`${BASE_URL}environments/${environmentID}`, {headers:{
                    "x-api-key": API_KEY,
                }})
            .expect("status", 200)
            .expect("jsonTypes", "environment", {"name": "Postman API env"})
    });

    it("GET a workspace", function (){
        return frisby
            .get(`${BASE_URL}workspaces/${workspaceID}`, {headers:{
                    "x-api-key": API_KEY,
                }})
            .expect("status", 200)
            .expect("jsonTypes", "workspace", {"name": "Ankorp"})
    });
});



