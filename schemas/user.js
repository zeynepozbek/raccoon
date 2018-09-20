var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: String,
    createDate: Date
});

var UserModel = mongoose.model('UserModel', UserSchema );

module.exports.User = UserModel;