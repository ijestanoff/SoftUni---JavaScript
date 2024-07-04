const router = require('express').Router();

const { isGuest, isAuth } = require('../middleware/authMiddleware');
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');
router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);

        //with auto login
        res.cookie('auth', token);
        res.redirect('/');

        //if no auto login
        //res.redirect('/auth/login');
    } catch (error) {
        res.render('auth/register', { ...userData, error: getErrorMessage(error) });
    }


});

router.get('/login',isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const loginData = req.body;

    try {
        const token = await authService.login(loginData);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        res.render('auth/login', { ...loginData, error: getErrorMessage(error) });
    }


});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;