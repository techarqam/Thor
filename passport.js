 const passport = require('passport');
 const LocalStrategy = require('passport-local');

 const User = require("./model/user")

 passport.use(new LocalStrategy({
   usernameField: 'user[username]',
   passwordField: 'user[password]',
 }, (username, password, done) => {
   User.findOne({
       username
     })
     .populate("contact")
     .then((user) => {
       if (!user || !user.validatePassword(password)) {
         return done(null, false, {
           error: {
             title: 'username or password is invalid',
             message: "please check username or password"
           }
         });
       }

       return done(null, user);
     }) 
     .catch(done);
 }));

 module.exports = passport;