const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [2, 'Username is min 2 symbols long'],
        maxLength: [20, 'Username is max 20 symbols long'],
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        minLength: [10, 'Email is at least 10 symbols long'],
        required: [true, 'Email is required'],
        unique: true, 
    },
    password: {
        type: String,
        minLength: [4,'Password must by at least 4 characters long!'],
        required: [true, 'Password is required'],
    },
    createdRecipes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Recipe',
    }],
    signedUpRecipes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Recipe',
    }],
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);

module.exports = User;