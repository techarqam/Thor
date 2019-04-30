var db = require('../dataContext').dbInstance;
var schema = new db.Schema({
    'order': Number,
    'name': String,
    'type': String,
    'forModel': String
});

module.exports = db.model('Stage', schema);