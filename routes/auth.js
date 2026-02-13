// routes/auth.js - Full A to Z

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login Page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Register Page
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

// Handle Login POST
router.post('/login', authController.loginUser);

// Handle Register POST
router.post('/register', authController.registerUser);

// Handle Logout
router.get('/logout', authController.logoutUser);

module.exports = router;
