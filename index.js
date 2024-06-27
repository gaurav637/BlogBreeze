
const express = require('express');
const path = require('path');
require('dotenv').config();
const {checkForAuthenticationCookie} = require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/middlewares/authentication.js');
const app = express();
const PORT = process.env.PORT||8080;
const cookiePaser = require('cookie-parser');
const userRouter = require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/routes/userRouter.js');
require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/db/connection.js');
const blogRouter = require('./routes/blogRouter');
const Blog = require('./models/blog');

app.set('view engine' , 'ejs');
app.set("views",path.resolve('./views'));

app.use(express.urlencoded({extended:false}));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie('token'));

app.get('/' , async (req,res) => {
   // console.log('user -> ',req.user);
    const allBlogs =  await Blog.find({});
    res.render('Home', {
        blogs: allBlogs,
        user: req.user,
    });
});
app.use('/user',userRouter); // sign and sign page
app.use('/blog' , blogRouter);



app.listen(PORT , ()=> {
    console.log(`server on at port -> ${PORT}`);
});