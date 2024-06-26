const express = require('express');
const router = express.Router();
const User = require('/Users/sudhanshubhardwaj/Desktop/Blog-App/models/user.js');

router.get('/signUp' , (req,res)=> {
    return res.render('signup');
});

router.get('/signIn' , (req,res)=> {
    return res.render('signin');
});

router.post('/signin', async (req,res)=> {
    const {email,password} = req.body;
    const user = User.matchPassword(email,password);
    console.log("user ", user);
    return res.redirect('/');
});

router.post('/signup', async (req,res)=> {
    const {fullName,email,password} = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/');
});


module.exports = router;