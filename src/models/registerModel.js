const bd = require('../database/bd');

const register = ({ name, email, password }) => {
    try {
        const res = saveUserData(name, email, password);

        if(res) {
            throw new Error(res);
        }

        return {
            error: false,
        }
    } catch (e) {
        console.log(`registerModel - register ${e}`);
        return {
            error: true,
            message: e.message,
        }
    }
}

const saveUserData = (name, email, password) => {
    if(!name || !email || !password) return;

    const res = bd.saveUser({ name, email, password });

    console.log(res);
    
    if(!res) {
        return 'Este usuário já foi registado.';
    }
}

module.exports = {
    register,
}