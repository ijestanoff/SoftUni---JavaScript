const User = require('../models/User');

exports.getInfo = (userId) => 
    User.findById(userId).populate(['createdRecipes', 'signedUpRecipes']);