const { validateToken } = require('/Users/sudhanshubhardwaj/Desktop/Blog-Node/BlogBreeze/services/authentication.js'); 

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next(); // If no cookie is found, proceed to the next middleware
        }
        
        try {
            const userPayload = validateToken(tokenCookieValue); // Validate the token using the token value
            req.user = userPayload; // Attach the user payload to req.user
        } catch (error) {
            console.error("Token validation error: ", error);
        }

        next();
    };
}

module.exports = {
    checkForAuthenticationCookie,
};
