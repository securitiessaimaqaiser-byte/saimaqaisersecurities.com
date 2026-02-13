// routes/dashboard.js - Full A to Z

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// Dashboard Home - Protected Route
router.get('/', authMiddleware.ensureAuthenticated, (req, res) => {
    res.render('dashboard', { title: 'Dashboard', user: req.user });
});

// Example Route: User Profile
router.get('/profile', authMiddleware.ensureAuthenticated, (req, res) => {
    res.render('dashboard', { title: 'Profile', user: req.user });
});

// Example Route: Account Settings
router.get('/settings', authMiddleware.ensureAuthenticated, (req, res) => {
    res.render('dashboard', { title: 'Settings', user: req.user });
});

module.exports = router;
