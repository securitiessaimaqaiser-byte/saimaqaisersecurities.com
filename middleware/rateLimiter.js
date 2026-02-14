const rateLimit = require('express-rate-limit');

// ===============================
// General Rate Limiter
// ===============================
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "Too many requests from this IP, please try again after 15 minutes."
});

// ===============================
// Login / Auth Rate Limiter
// ===============================
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per window
    message: "Too many login attempts. Please try again after 15 minutes."
});

module.exports = {
    generalLimiter,
    authLimiter
};
