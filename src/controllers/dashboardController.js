const path = require('path');

function index(req, res) {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'))
}

module.exports = {
    index,
}