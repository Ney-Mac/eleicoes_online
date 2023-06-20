const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './bd.json');
const BD = fs.readFileSync(filePath, 'utf-8');
const bd = JSON.parse(BD);

const saveUser = (userData) => {
    const userExist = getUserBy(userData.email);

    if(userExist) return false;

    bd.users.push({ ...userData, id: bd.users.length });

    const updateBd = JSON.stringify(bd, null, 2);
    fs.writeFileSync(filePath, updateBd, 'utf-8');
    return true;
}

const getUserBy = (key) => {//email or id
    for(let user of bd.users) {
        if(key === user.email || key === user.id) {
            return user;
        }
    }
    return false;
}

module.exports = {
    saveUser,
    getUserBy,
}
