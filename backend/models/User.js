const mongoose = require('mongoose');
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
        },
    points: {
        type: Number, 
        required: true
    },
    salt: {type: String},
    hash: {type: String}
});


UserSchema.methods.setPassword = (password) => {

    console.log(password);
    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


UserSchema.methods.correctPassword = (password) => {
    let tempHash =  crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

    return this.hash === tempHash;
};

module.exports = User = mongoose.model("users", UserSchema);