const frisby = require("frisby");
const Joi = frisby.Joi;

it (' POSt shold return a status 200 and user data ', function (){
    return frisby.post('https://postman-echo.com/post',{
        "data": "doodles"
    })
        .expect("status", 200)
        .expect("json", "json", {data: "doodles"})
});
