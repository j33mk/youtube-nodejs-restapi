const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    userName:String,
    email:String,
    age:Number
},{
    timestamp:true
});

module.exports = mongoose.model('User',UserSchema);