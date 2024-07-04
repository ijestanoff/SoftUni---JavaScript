const Recipe = require('../models/Recipe');
const User = require('../models/User');

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId);

exports.getLatest = () => Recipe.find().sort({ createdAt: -1 }).limit(3);

exports.getOneDetailed = (recipeId) => this.getOne(recipeId).populate('owner').populate('recommendList');

exports.signUp = async (recipeId, userId) => {
    const recipe = await Recipe.findById(recipeId);
    const user = await User.findById(userId);

    recipe.recommendList.push(userId);
    user.signedUpRecipes.push(recipeId);

    await recipe.save();
    await user.save();
};

exports.create = async (userId, recipeData) => {
    const createdRecipe = await Recipe.create({
        owner: userId,
        ...recipeData
    });
    await User.findByIdAndUpdate(userId, { $push: { createdRecipes: createdRecipe._id } });

    return createdRecipe;
};

exports.delete = (recipeId) => Recipe.findByIdAndDelete(recipeId);

exports.edit = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData, { runValidators: true });

exports.search = (title) => {
    let query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    return Recipe.find(query);
};