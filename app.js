const express = require('express');
const app = express();
const port = 3000;

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');
const dashboardController = require('./src/controllers/dashboardController');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Rotas home
app.get('/', homeController.index);

//Rotas dashboard
app.get('/dashboard', dashboardController.index);

//Rotas login
app.get('/login', loginController.index);
app.post('/login', loginController.login);

//Rotas register
app.get('/register', registerController.index);
app.post('/register', registerController.register);

app.listen(port, () => {
    console.log(`gerenciador de eleicoes: http://localhost:${port}`);
})


