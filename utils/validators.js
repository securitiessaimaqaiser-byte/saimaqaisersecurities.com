// utils/validators.js - Full A to Z

// Validate user registration input
exports.validateRegister = ({ name, email, password, confirmPassword }) => {
    let errors = {};

    if (!name || name.trim() === '') {
        errors.name = 'Name is required';
    }

    if (!email || email.trim() === '') {
        errors.email = 'Email is required';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Email is invalid';
        }
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};

// Validate user login input
exports.validateLogin = ({ email, password }) => {
    let errors = {};

    if (!email || email.trim() === '') {
        errors.email = 'Email is required';
    }

    if (!password) {
        errors.password = 'Password is required';
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
};
