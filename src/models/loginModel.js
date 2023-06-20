const login = async ({ email, password }) => {
    try {
        //throw new Error('Teste de falha');
        
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
