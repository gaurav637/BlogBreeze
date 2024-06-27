const mongoose = require('mongoose');
const crypto = require('crypto');
const auth = require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/services/authentication.js');

const userSchema = new mongoose.Schema({
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
        type: String
    },
    password:{
        type: String,
        required: true,
    },
    profileImage:{
        type: String,
        default: '/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/public/upload/1719474106725-$(file.originalname)',
    },
    role:{
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER",// R05845558
    }  // 5956000100025173

});

userSchema.pre('save' , function(next){ // after perform any save operation in database
    const user = this; // current user
    if(!user.isModified('password')){// if password does not update
        return;
    }
    const salt = crypto.randomBytes(16).toString(); // randon String 
    const hashPassword = crypto.createHmac('sha256',salt)
    .update(user.password)
    .digest('hex');

    this.salt = salt;
    this.password = hashPassword;
    next();

})

userSchema.static('matchPasswordAndCreateToken' , async function(email,password){
    const user = await this.findOne({email});
    if(!user) throw new Error("user not found!");
    const salt = user.salt;
    const hassPassword = user.password;
    const currentPasswordHash = crypto.createHmac('sha256',salt)
    .update(password)
    .digest('hex');

    if(hassPassword!=currentPasswordHash) throw new Error("Incoorect Password!");
    const token = auth.createTokenForUser(user);
    return token;
})

const user = mongoose.model('User',userSchema);
module.exports = user;