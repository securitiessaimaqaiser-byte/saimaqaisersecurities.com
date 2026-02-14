// controllers/dashboardController.js - Full A to Z

// Render Dashboard Home
exports.renderDashboard = (req, res) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    res.render('dashboard', { title: 'Dashboard', user: req.user });
};

// Render Profile Page
exports.renderProfile = (req, res) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    res.render('dashboard', { title: 'Profile', user: req.user });
};

// Render Account Settings Page
exports.renderSettings = (req, res) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    res.render('dashboard', { title: 'Settings', user: req.user });
};
