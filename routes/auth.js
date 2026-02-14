const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { forwardAuthenticated } = require('../middleware/authMiddleware');
const { authLimiter } = require('../middleware/rateLimiter');

// ===============================
// Authentication Routes
// ===============================

// Register Routes
router.get('/register', forwardAuthenticated, authController.getRegister);
router.post('/register', authLimiter, authController.postRegister);

// Login Routes
router.get('/login', forwardAuthenticated, authController.getLogin);
router.post('/login', authLimiter, authController.postLogin);

// Logout Route
router.get('/logout', authController.logout);

module.exports = router;
