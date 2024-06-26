
const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT||8080;
const userRouter = require('/Users/sudhanshubhardwaj/Desktop/Blog-App/routes/userRouter.js');
require('/Users/sudhanshubhardwaj/Desktop/Blog-App/db/connection.js');

app.set('view engine' , 'ejs');
app.set("views",path.resolve('./views'));

app.use(express.urlencoded({extended:false}));

app.get('/' , (req,res) => {
    res.render('home')
})
app.use('/user',userRouter);


app.listen(PORT , ()=> {
    console.log(`server on at port -> ${PORT}`);
});