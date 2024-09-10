const express = require('express');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

// Sync database
sequelize.sync();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/accounts', authMiddleware, accountRoutes);
app.use('/api/transactions', authMiddleware, transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
require('dotenv').config();
