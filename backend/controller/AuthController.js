const UsersModel = require('../model/UsersModel.js');
const {createSecretToken} = require('../util/SecretToken.js');
const bcrypt = require('bcryptjs');

module.exports.Signup = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        const existingUser = await UsersModel.findOne({email});

        if (existingUser) {
            return res.json({message: 'user already exists'});
        }

        const user = await UsersModel.create({email, password, username});
        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false
        });
        res.status(201).json({message: 'user signed in successfully', success: true, user});
        next();
    } catch (error) {
        console.error(error);
    }
}

module.exports.Login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.json({message: 'all fields are required'});
        }

        const user = await UsersModel.findOne({email});

        if (!user) {
            return res.json({message: 'incorrect email or password'});
        }

        const auth = await bcrypt.compare(password, user.password);

        if (!auth) {
            return res.json({message: 'incorrect email or password'});
        }

        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false
        });
        res.status(201).json({message: 'user logged in successfully', success: true});
        next();
    } catch (error) {
        console.error(error);
    }
}