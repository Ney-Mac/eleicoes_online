const path = require('path');
const registerModel = require('../models/registerModel');

function index(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html'))
}

async function register(req, res) {
    const registerStatus = await registerModel.register(req.body);

    if(registerStatus.error) {
        res.redirect(`/register?error=${registerStatus.message}`);
        return;
    }

    res.redirect('/dashboard');
}

module.exports = {
    index,
    register,
}