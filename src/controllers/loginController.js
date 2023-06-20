const path = require('path');
const loginModel = require('../models/loginModel');

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
}

const login = async (req, res) => {
    const loginStatus = await loginModel.login(req.body);

    if(loginStatus.error) {
        res.redirect(`/login?error=${loginStatus.message}`);
        return;
    }

    res.redirect('/dashboard');
}

module.exports = {
    index,
    login,
}