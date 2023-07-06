const frisby = require("frisby");
describe('day_06', () => {
    it ('random jokes and get status 200', function (){
        return frisby.get('https://icanhazdadjoke.com/')
            .expect('status', 200)
    });
    it ('exected a 404', function (){
        return frisby.get('https://icanhazdadjoke.com/')
            .expect('status', 200)

    });
});