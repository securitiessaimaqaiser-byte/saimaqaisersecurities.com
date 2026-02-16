// ===============================
// CORE DEPENDENCIES
// ===============================
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');

// ===============================
// APP INITIALIZATION
// ===============================
const app = express();

// ===============================
// ENV VARIABLES
// ===============================
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ===============================
// DATABASE CONNECTION
// ===============================
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
});

// ===============================
// TRUST PROXY (For Production Hosting)
// ===============================
if (NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

// ===============================
// VIEW ENGINE
// ===============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===============================
// MIDDLEWARE
// ===============================

// Security Headers
app.use(helmet());

// Compression
app.use(compression());

// Logging (only in development)
if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Body Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// ===============================
// SESSION CONFIGURATION
// ===============================
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: MONGO_URI,
        }),
        cookie: {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 2, // 2 hours
        },
    })
);

// Flash Messages
app.use(flash());

// ===============================
// GLOBAL VARIABLES (For Views)
// ===============================
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.session.userId || null;
    next();
});

// ===============================
// GLOBAL RATE LIMITER
// ===============================
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: 'Too many requests. Please try again later.'
});

app.use(globalLimiter);

// ===============================
// ROUTES
// ===============================
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

// ===============================
// 404 HANDLER
// ===============================
app.use((req, res) => {
    res.status(404).render('404');
});

// ===============================
// GLOBAL ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
    console.error('🔥 Server Error:', err);
    res.status(500).send('Internal Server Error');
});

// ===============================
// SERVER START
// ===============================
app.listen(PORT, () => {
    console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`);
});
