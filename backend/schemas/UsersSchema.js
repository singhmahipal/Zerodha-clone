const {Schema} = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
}, {
    timestamps: true
});

// Fix: Added next parameter and proper error handling
UsersSchema.pre('save', async function(next) {
    try {
        // Only hash if password is modified or new
        if (!this.isModified('password')) {
            return next();
        }
        
        // Hash password
        this.password = await bcrypt.hash(this.password, 12);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = {UsersSchema};