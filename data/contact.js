const repeat = 120; 
const faker = require('faker');
const gender = ["male", "female", "other"]

function get() {
    let records = [];
    for (let i = 0; i < repeat; i++) {
        var personData = {
            'firstName': faker.name.firstName(),
            'lastName': faker.name.lastName(),
            'title': faker.name.title(),
            'email': faker.internet.email(),
            'address': faker.address.city() + " " + faker.address.country(),
            'gender': gender[faker.random.number(2)],
            'dob': faker.date.past(),
            'mobile': faker.phone.phoneNumber(),
            'city': faker.address.city(),
            'zipCode': faker.address.zipCode(),
            'addressLine1': faker.address.streetAddress(true),
            'addressLine2': faker.address.secondaryAddress(),
            'extra': faker.lorem.paragraph()
        }
        records.push(personData);
    }
    return  records;
}
module.exports = {
    get: get
};