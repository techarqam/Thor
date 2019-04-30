const repeat = 100;

const faker = require('faker');

function get(contacts, course, stages, activities) {

    let records = [];

    for (let i = 0; i < repeat; i++) {
        var ran1 = faker.random.number(20);
        var ran2 = ran1 + faker.random.number(40);
        var data = {
            'leadId': faker.random.alphaNumeric(10),
            'contact': contacts[i],
            'courses': [course[faker.random.number(0, 4)], course[faker.random.number(5, 9)]],
            'score': faker.random.number(100),
            'stage': stages[faker.random.number(4)],
            'tags': [faker.lorem.word(5), faker.lorem.word(5), faker.lorem.word(5)],
            'date': faker.date.recent(10),
            'notes': [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()],
            'activities': [activities[faker.random.number(0, 10)], activities[faker.random.number(11, 20)]],
            'order': i
        }

        records.push(data);

    }


    return records;

}
module.exports = {
    get: get
};