
const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT||8080;

app.set('view engine' , 'ejs');
app.set("views",path.resolve('./views'));

app.get('/' , (req,res) => {
    res.render('home')
})

app.listen(PORT , ()=> {
    console.log(`server on at port -> ${PORT}`);
});