const frisby = require('frisby');
describe('Day_11', () => {
    it('checking status and level water', (done) => {
        frisby
            .get('https://water-ttl.herokuapp.com/hygrometer')
            .expect('status', 200)
            .then((response) => {
                const levelOfWater = response.json.level;


                if (levelOfWater < 60) {
                    frisby
                        .post('https://water-ttl.herokuapp.com/water', { duration: 10 })
                        .expect('status', 200)
                        .then((wateringResponse) => {
                            const success = wateringResponse.json.success;
                            if (success) {
                                console.log('good water');
                            } else {
                                console.log('please help me');
                            }
                            done();
                        });
                }
                if(levelOfWater >= 60) {

                    console.log(`all right`);
                    done();
                }
            });
    });
});