const router = require('express').Router();

const recipeService = require('../services/recipeService');

router.get('/', async (req, res) => {
    const latestRecipes = await recipeService.getLatest().lean();
    res.render('home', { latestRecipes });
});

router.get('/search', async (req, res) => {
    const { search } = req.query;
    const recipes = await recipeService.search(search).lean();
    
    res.render('search' , { recipes }); 
});

module.exports = router;