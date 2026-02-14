const express = require('express');
const router = express.Router();

// ===============================
// Render Public Pages
// ===============================
router.get('/', (req, res) => {
    res.render('index', {
        user: req.session.userId || null,
        success: req.flash('success'),
        error: req.flash('error')
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        user: req.session.userId || null,
        success: req.flash('success'),
        error: req.flash('error')
    });
});

router.get('/services', (req, res) => {
    res.render('services', {
        user: req.session.userId || null,
        success: req.flash('success'),
        error: req.flash('error')
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        user: req.session.userId || null,
        success: req.flash('success'),
        error: req.flash('error')
    });
});

module.exports = router;
