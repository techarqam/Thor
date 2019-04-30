var db = require('../dataContext').dbInstance; 
var schema = new db.Schema({
    'title': String,
    'content': Object,
    'type': String,
    'forModel': String,
    'user': { type: db.Schema.Types.ObjectId, ref: 'User' },
    'date': Date
});

module.exports = db.model('Activity', schema);