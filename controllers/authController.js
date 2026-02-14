const bcrypt = require('bcrypt');
const User = require('../models/User');

// ===============================
// Render Pages
// ===============================
exports.getRegister = (req, res) => {
    res.render('register', { errors: [], oldInput: {} });
};

exports.getLogin = (req, res) => {
    res.render('login', { errors: [], oldInput: {} });
};

// ===============================
// Register User
// ===============================
exports.postRegister = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors = [];

    // Basic validations
    if (!name || !email || !password || !confirmPassword) {
        errors.push({ msg: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
        errors.push({ msg: 'Passwords do not match.' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters.' });
    }

    if (errors.length > 0) {
        return res.render('register', { errors, oldInput: req.body });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            errors.push({ msg: 'Email is already registered.' });
            return res.render('register', { errors, oldInput: req.body });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        req.flash('success', 'Registration successful. You can now login.');
        res.redirect('/auth/login');
    } catch (err) {
        console.error(err);
        errors.push({ msg: 'Something went wrong. Try again later.' });
        return res.render('register', { errors, oldInput: req.body });
    }
};

// ===============================
// Login User
// ===============================
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const errors = [];

    if (!email || !password) {
        errors.push({ msg: 'All fields are required.' });
        return res.render('login', { errors, oldInput: req.body });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            errors.push({ msg: 'Invalid credentials.' });
            return res.render('login', { errors, oldInput: req.body });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            errors.push({ msg: 'Invalid credentials.' });
            return res.render('login', { errors, oldInput: req.body });
        }

        // Store user id in session
        req.session.userId = user._id;
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        errors.push({ msg: 'Something went wrong. Try again later.' });
        return res.render('login', { errors, oldInput: req.body });
    }
};

// ===============================
// Logout User
// ===============================
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.redirect('/dashboard');
        }
        res.clearCookie('connect.sid');
        res.redirect('/auth/login');
    });
};
