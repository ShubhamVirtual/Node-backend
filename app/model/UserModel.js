var MongoClient = require('mongoose');
var Schema = MongoClient.Schema;

var userSchema = new MongoClient.Schema({
    name: String,
    phone: String
}, {
    timestamps: true
});
var userModel=MongoClient.model('products',userSchema);
module.exports = userModel;