const express = require('express');
const router = express.Router();
const User = require('../models.user');

router.get('/signUp' , (req,res)=> {
    return res.render('signup');
});

router.get('/signIn' , (req,res)=> {
    return res.render('signin');
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