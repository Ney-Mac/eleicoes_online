const bd = require('../database/bd');

const login = ({ email, password }) => {
    try {
        const res = bd.getUserBy(email);

        console.log(res);

        if(!res || (res.email !== email || res.password !== password)) {
            throw new Error('Dados incorrectos!');
        }

        return {
            error: false,
        }
    }catch(e) {
        console.log(`loginModel - login ${e}`);
        return {
            error: true,
            message: e.message,
        }
    }
}

module.exports = {
    login,
}
