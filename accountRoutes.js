const express = require('express');
const accountController = require('../controllers/accountcontroller');

const router = express.Router();

// Define routes for account-related operations
router.post('/create', accountController.createAccount);
// Add other account-related routes here (e.g., for fetching accounts, updating accounts)

module.exports = router;
