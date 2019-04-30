const repeat = 200; 
const faker = require('faker'); 
const type = [ 
   'update',
   'campaign',
   'created',
]

function get(user,forModel) {

    let records=[];
   
    for (let i = 0; i < repeat; i++) { 
        var data = {
            'title':faker.random.word(8),
            'content': faker.lorem.lines(2),
            'type': type[faker.random.number(2)],
            'user':user[i],
            'forModel':forModel,
            'date':faker.date.recent(10)
        }

        records.push(data);

    }


    return   records;

}
module.exports = {
    get: get
};