const User = require('../models/userModel');

exports.findUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
};

exports.createUser = async (userData) => {
    return User.create(userData);
};
