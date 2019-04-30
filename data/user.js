const repeat = 20;
const faker = require('faker');
const User = require('../model/user');

function get(contacts) {

    let records = [];

    for (let i = 0; i < repeat; i++) {
      
        var userdata = {
            'username': faker.internet.userName(),
            'password': faker.internet.password(8,true),
            'contact': contacts[i]
        }
        const finalUser = new User(userdata); 
        finalUser.setPassword(userdata.password);

        records.push(finalUser);
    }
    return records;
}


module.exports = {
    get: get
};
