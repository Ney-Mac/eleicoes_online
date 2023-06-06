const path = require('path');

function register(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html'))
}

module.exports = {
    register
}