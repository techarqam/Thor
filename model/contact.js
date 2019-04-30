var db = require('../dataContext').dbInstance;
var schema = new db.Schema({ 
    'firstName': String,
    'lastName': String,
    'title':String,
    'email':String, 
    'gender': String,
    'dob':Date,
    'mobile':String,
    'city':String,
    'zipCode':String,
    'addressLine1':String,
    'addressLine2':String,
    'extra':Object
}); 

module.exports = db.model('Contact', schema);