const jwt = require('jsonwebtoken');
//const { SECRET } = require('../config');

exports.authMiddleware = async (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'SOMESECRETEHERE');
        req.user = decodedToken;

        next();
    } catch (err) {
        res.redirect('/auth/login');
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }

    next();
};

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }

    next();
};