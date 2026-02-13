// server.js - Full A to Z

// ----------------------
// IMPORT DEPENDENCIES
// ----------------------
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// ----------------------
// CONFIGURATION
// ----------------------
dotenv.config(); // Load .env variables
const app = express();
const PORT = process.env.PORT || 3000;

// ----------------------
// SECURITY MIDDLEWARE
// ----------------------
app.use(helmet()); // Secure HTTP headers

// Rate limiting - limit repeated requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// ----------------------
// MIDDLEWARE
// ----------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------
// EJS TEMPLATE ENGINE
// ----------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ----------------------
// ROUTES
// ----------------------

// Import route modules (we'll fill these later)
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

// Use routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

// 404 Page
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
