const Transaction = require('../models/transactionModel');

exports.createTransaction = async (transactionData) => {
    return Transaction.create(transactionData);
};

// Implement other transaction-related repository functions
