const bcrypt = require('bcryptjs');
const sha3 = require('crypto-js/sha3');

module.exports = {
    async hash(plain, email) {
        return await bcrypt.hash(plain, bcrypt.genSaltSync(10));
    },
    getSalt: (from) => {
        return sha3(from);
    }
}