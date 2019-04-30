const {
    connectionString
} = require("./config/constant");
var mongoose = require('mongoose');
mongoose.connect(connectionString(), {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongo db connected..")
    console.log("connected to " + connectionString())
});



module.exports = {
    dbInstance: mongoose
};
