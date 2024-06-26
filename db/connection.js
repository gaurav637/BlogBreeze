const mongoose = require('mongoose');
require('dotenv').config;

const url = process.env.MONGO_URI;

mongoose.connect(url).then(()=> {
    console.log("database connected");
}).catch(() => {
    console.log('error: connect to database');
})
