const express = require('express');
const router = express.Router();
const User = require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/models/user.js');

router.get('/signUp' , (req,res)=> {
    return res.render('signup');
});

router.get('/signIn' , (req,res)=> {
    return res.render('signin');
});

router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await User.matchPasswordAndCreateToken(email, password);
      return res.cookie("token",token).redirect('/');
    } catch (error) {
      console.error(error);
      return res.render('signin', {Error: 'Incorrect Password and Email!'})
      return res.status(500).send('Error signing in');
    }
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

router.get('/logout',(req,res) => {
    res.clearCookie('token').redirect('/');
});


module.exports = router;