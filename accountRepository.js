const Account = require('../models/accountModel');

exports.createAccount = async (accountData) => {
    return Account.create(accountData);
};

// Implement other account-related repository functions
