const mongoose = require('mongoose');

const recipeShema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100,
        required: [true, 'Description is required']
    },
    ingredients: {
        type: String,
        minLength: 10,
        maxLength: 200,
        required: [true, 'Ingredients is required']
    },
    instructions: {
        type: String,
        minLength: 10,
        required: [true, 'Instructions is required']
    },
    image: {
        type: String,
        match: /^https?:\/\//,
        required: [true, 'Image is required']
    },
    recommendList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: Date,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

recipeShema.pre('save', function() {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }
});

const Recipe = mongoose.model('Recipe', recipeShema);

module.exports = Recipe;