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
    salt: String,
    hash: String
});

UserSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha12').toString('hex');
};


UserSchema.methods.correctPassword = (password) => {
    let tempHash =  crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha12').toString('hex');

    return this.hash === tempHash;
};

module.exports = User = mongoose.model("users", UserSchema);