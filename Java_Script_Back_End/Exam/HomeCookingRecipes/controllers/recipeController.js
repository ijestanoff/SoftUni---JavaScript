const router = require('express').Router();
const { isAuth } = require('../middleware/authMiddleware');
const recipeService = require('../services/recipeService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/', async (req, res) => {
    const recipes = await recipeService.getAll().lean();

    res.render('recipes/catalog', { recipes });
});

router.get('/:recipeId/details', async (req, res) => {
    const recipe = await recipeService.getOneDetailed(req.params.recipeId).lean();

    const signUpUsers = recipe.recommendList.length;
    const isOwner = recipe.owner._id && recipe.owner._id == req.user?._id;
    const isSigned = recipe.recommendList.some(user => user._id == req.user?._id);
    res.render('recipes/details', { ...recipe, signUpUsers, isOwner, isSigned });
});

router.get('/:recipeId/sign-up', async (req, res) => {
    const recipe = await recipeService.getOneDetailed(req.params.recipeId).lean();
    const isSigned = recipe.recommendList.some(user => user._id == req.user?._id);

    if (!isSigned) {
        await recipeService.signUp(req.params.recipeId, req.user._id);
    }

    res.redirect(`/recipes/${req.params.recipeId}/details`);
});

router.get('/create', isAuth, (req, res) => {
    res.render('recipes/create');
});

router.post('/create', isAuth, async (req, res) => {
    const recipeData = req.body;
    try {
        await recipeService.create(req.user._id, recipeData);

        res.redirect('/recipes');
    } catch (error) {
        res.render('recipes/create', { ...recipeData, error: getErrorMessage(error) });
    }
});

router.get('/:recipeId/edit', isRecipeOwner, async (req, res) => {
    res.render('recipes/edit', { ...req.recipe });
});

router.post('/:recipeId/edit', isRecipeOwner, async (req, res) => {
    const recipeData = req.body;

    try {
        await recipeService.edit(req.params.recipeId, recipeData);

        res.redirect(`/recipes/${req.params.recipeId}/details`);

    } catch (err) {
        res.render('recipes/edit', { ...recipeData, error: getErrorMessage(err) });
    }

});

router.get('/:recipeId/delete', isRecipeOwner, async (req, res) => {
    await recipeService.delete(req.params.recipeId);

    res.redirect('/recipes');
});

async function isRecipeOwner(req, res, next) {
    const recipe = await recipeService.getOne(req.params.recipeId).lean();

    if (recipe.owner != req.user?._id) {
        return res.redirect(`/recipes/${req.params.recipeId}/details`);
    }

    req.recipe = recipe;

    next();
}

module.exports = router;