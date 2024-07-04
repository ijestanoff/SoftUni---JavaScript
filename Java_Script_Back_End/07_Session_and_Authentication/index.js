const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

const secret = 'qwendvohasdm1234fnerxwe234jml1234';

const db = {
    'navy': '$2b$12$1clG016/BqEXMEHv5QmbdekKd5AVWvYdgtsbmlg2H6CtWIQU9BLdK',
};

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    const token = req.cookies['auth'];
    if (!token) {
        return res.send('Please login!');
    }

    try {
        const decodedToken = jsonwebtoken.verify(token, secret);
        console.log(decodedToken);
        res.send(`Welcome ${decodedToken['username']}`);
    } catch (error) {
        res.status(403).send('Unauthorized');
    }
});

// TODO: set cookie
app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <label>Username</label>
            <input type="text" name="username" />
            <label>Password</label>
            <input type="password" name="password"/>
            <input type="submit" value="login">
        </form>
    `);
    //res.end();
});

app.post('/login', async (req, res) => {
    //res.cookie('user', req.body.username);

    const hash = db[req.body.username];

    if (!hash) {
        return res.status(401).end();
    }

    //Check if password is valid
    const isValid = await bcrypt.compare(req.body.password, hash);

    if (!isValid) {
        return res.status(401).send('Unauthorized');
    }

    // Generate token
    const payload = {
        username: req.body.username,
    };
    //Use synchronous sign, not recommended! 
    const token = jsonwebtoken.sign(payload, secret, { expiresIn: '2h' });
    //console.log(token);
    res.cookie('auth', token, { httpOnly: true });
    res.send('Logged successefully');
});

app.get('/register', (req, res) => {
    res.send(`
        <form action="/register" method="post">
            <label>Username</label>
            <input type="text" name="username" />
            <label>Password</label>
            <input type="password" name="password"/>
            <input type="submit" value="register">
        </form>
    `);
    //res.end();
});

app.post('/register', async (req, res) => {
    //HASH PASSWORD
    //const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, 12);
    //console.log(hash);
    db[req.body.username] = hash;
    res.redirect('/login');

});

app.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.end();
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
