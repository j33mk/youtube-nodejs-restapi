const mongoose = require('mongoose');
const dbConfig = require('../config/database.config');

mongoose.connect(dbConfig.url, {useNewUrlParser:true}).then(()=>{
    console.log('Successfully connected to database');
}).catch((err)=>{
    console.log(err);
    console.log('sorry something went wrong');
    process.exit(1);
});

module.exports = mongoose;