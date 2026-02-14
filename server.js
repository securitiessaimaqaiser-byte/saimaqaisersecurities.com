// server.js - Full A to Z

require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const helmet = require('helmet');
const rateLimiter = require('./middleware/rateLimiter');

// Route Imports
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

/* ===============================
   DATABASE CONNECTION
================================= */

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
});

/* ===============================
   MIDDLEWARE
================================= */

// Security headers
app.use(helmet());

// Rate limiting
app.use(rateLimiter);

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 2 // 2 hours
    }
}));

// Global user variable for EJS
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

/* ===============================
   VIEW ENGINE
================================= */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ===============================
   STATIC FILES
================================= */

app.use(express.static(path.join(__dirname, 'public')));

/* ===============================
   ROUTES
================================= */

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

/* ===============================
   404 HANDLER
================================= */

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

/* ===============================
   SERVER START
================================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
