var db = require('../dataContext').dbInstance;
var schema = new db.Schema({
    'title': String,
    'content':Object,
    'type': String,
    'forModel': String,
    'date': Date
});

module.exports = db.model('Note', schema);