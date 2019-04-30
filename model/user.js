const crypto = require('crypto');
const jwt = require('jsonwebtoken');
var db = require('../dataContext').dbInstance; 

var UserSchema = new db.Schema({
  username: String,
  hash: String,
  salt: String,
  contact: { type: db.Schema.Types.ObjectId, ref: 'Contact' },
  password: String
});


UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    username: this.username,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'thor');
}

UserSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    username: this.username,
    token: this.generateJWT(),
    name: this.contact.firstName +" "+ this.contact.lastName 
  };
};

UserSchema.methods.toProfileJSON = function () {
  return {
    _id: this._id,
    username: this.username, 
    title:this.title,
    contact:this.contact
  };
};



var User = db.model('User', UserSchema);

module.exports = User;