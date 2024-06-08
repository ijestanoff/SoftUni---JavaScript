const middlewareChain = require('./middleware');

middlewareChain.use((req, res, next) => {
    req.user = 'Pesho';
    console.log('First middware');
    next();
});

middlewareChain.use((req, res, next) => {
    req.age = 20;
    console.log('Second middware');
    next();
});

middlewareChain.use((req, res, next) => {
    req.isAuthenticated = true;
    console.log('Third middware');
    next();
});

middlewareChain.execute({}, {}, (req, res) => {
    console.log('Middleware CHAIN finished');
    console.log(req);
});
