const User = require('../models/User');

// ===============================
// Render Dashboard
// ===============================
exports.getDashboard = async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            req.flash('error', 'Please log in to access the dashboard.');
            return res.redirect('/auth/login');
        }

        // Fetch user details
        const user = await User.findById(userId).lean();

        if (!user) {
            req.flash('error', 'User not found.');
            return res.redirect('/auth/login');
        }

        // Render dashboard with user info
        res.render('dashboard', {
            user,
            success: req.flash('success'),
            error: req.flash('error')
        });
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong. Try again later.');
        return res.redirect('/auth/login');
    }
};
