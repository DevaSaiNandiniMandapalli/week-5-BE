const userService = require('../services/userservice');

exports.register = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await userService.login(req.body);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
