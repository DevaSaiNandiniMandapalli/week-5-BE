const transactionService = require('../services/transactionservice');

exports.createTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.createTransaction(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Implement other transaction-related controllers
