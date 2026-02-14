// middleware/authMiddleware.js - Full A to Z

// Middleware to ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
    // If using express-session
    if (req.session && req.session.user) {
        req.user = req.session.user;
        return next();
    }

    // If using a token-based system, implement token check here

    // If not authenticated, redirect to login
    return res.redirect('/auth/login');
};
