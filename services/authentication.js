const JWT = require('jsonwebtoken');
const secret = "$GauravNegi@2004";

function createTokenForUser(user){ // take user onject

    const payload = {
        _id: user._id,
        email: user.email,
        profilePhoto: user.profileImage,
        role: user.role,
        fullName: user.fullName
    };
    const token = JWT.sign(payload,secret);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
};