const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {UsersSchema} = require('../schemas/UsersSchema.js');

const UsersModel = mongoose.model('user', UsersSchema);

module.exports = UsersModel;
