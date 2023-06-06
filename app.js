const express = require('express');
const app = express();
const port = 3000;

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');

app.use(express.static('public'));

app.get('/', homeController.index);
app.get('/login', loginController.login);
app.get('/register', registerController.register);

app.listen(port, () => {
    console.log(`gerenciador de eleicoes: http://localhost:${port}`);
})


