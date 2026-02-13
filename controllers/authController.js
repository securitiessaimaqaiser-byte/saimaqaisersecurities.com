// controllers/authController.js - Full A to Z

const bcrypt = require('bcrypt');
const User = require('../models/User');
const { validateRegister, validateLogin } = require('../utils/validators');

// Handle User Registration
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Validate input
        const { valid, errors } = validateRegister({ name, email, password, confirmPassword });
        if (!valid) {
            return res.render('register', { title: 'Register', errors, formData: req.body });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { title: 'Register', errors: { email: 'Email already registered' }, formData: req.body });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // Redirect to login
        res.redirect('/auth/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Handle User Login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        const { valid, errors } = validateLogin({ email, password });
        if (!valid) {
            return res.render('login', { title: 'Login', errors, formData: req.body });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.render('login', { title: 'Login', errors: { email: 'Email not found' }, formData: req.body });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.render('login', { title: 'Login', errors: { password: 'Incorrect password' }, formData: req.body });
        }

        // Set user session / cookie
        req.user = user;
        req.session.user = user; // If using express-session

        // Redirect to dashboard
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Handle User Logout
exports.logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.redirect('/');
    });
};
