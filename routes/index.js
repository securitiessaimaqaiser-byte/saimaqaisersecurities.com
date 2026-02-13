// routes/index.js - Full A to Z

const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About Page
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Services Page
router.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services' });
});

// Contact Page
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
