const UsersModel = require('../model/UsersModel.js');
const {createSecretToken} = require('../util/SecretToken.js');
const bcrypt = require('bcryptjs');

module.exports.Signup = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        
        // Validate input
        if (!email || !password || !username) {
            return res.status(400).json({message: 'All fields are required', success: false});
        }
        
        const existingUser = await UsersModel.findOne({email});

        if (existingUser) {
            return res.status(400).json({message: 'User already exists', success: false});
        }

        const user = await UsersModel.create({email, password, username});
        const token = createSecretToken(user._id);
        
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });
        
        res.status(201).json({
            message: 'User signed up successfully', 
            success: true, 
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error during signup', success: false});
    }
}

module.exports.Login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({message: 'All fields are required', success: false});
        }

        const user = await UsersModel.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'Incorrect email or password', success: false});
        }

        const auth = await bcrypt.compare(password, user.password);

        if (!auth) {
            return res.status(401).json({message: 'Incorrect email or password', success: false});
        }

        const token = createSecretToken(user._id);
        
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 3 * 24 * 60 * 60 * 1000
        });
        
        res.status(200).json({
            message: 'User logged in successfully', 
            success: true,
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error during login', success: false});
    }
}

module.exports.Logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            withCredentials: true,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0 // Expire immediately
        });
        
        res.status(200).json({
            message: 'User logged out successfully',
            success: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error during logout', success: false});
    }
}