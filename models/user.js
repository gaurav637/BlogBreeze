const mongoose = require('mongoose');
const {createHmac,randonBytes} = require('crypto')

const userSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    salt:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    profileImage:{
        type: String,
        default: '/Users/sudhanshubhardwaj/Desktop/Blog-App/public/images.jpeg',
    },
    role:{
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER",
    }

});

userSchema.pre('save' , function(next){ // after perform any save operation in database
    const user = this; // current user
    if(!user.isModified('password')){// if password does not update
        return;
    }
    const salt = randonBytes(16).toString(); // randon String 
    const hashPassword = createHmac('sha256',salt)
    .update(user.password)
    .digest('hex');

    this.salt = salt;
    this.password = hashPassword;
    next();

})

const user = model('User',userSchema);
module.exports = user;