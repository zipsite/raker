const gen = require('@faker-js/faker');
const fs = require("fs");

const faker = gen.faker;

faker.locale = 'ru';

let arrUser = [];

for(let i = 0; i < 100; i++) {
    arrUser[i] = {
        firstname: faker.name.firstName(),
        secondname: faker.name.lastName(),
        address: faker.address.streetAddress(),
        car: faker.vehicle.vehicle(),
        phone: faker.phone.number('+7(###)###-##-##')
    }    
}

fs.writeFileSync('db.json', JSON.stringify(arrUser));
