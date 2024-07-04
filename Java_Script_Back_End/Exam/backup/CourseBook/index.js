const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { authMiddleware } = require('./middleware/authMiddleware');

const app = express();

//Caution of order of next middleware
app.use(express.static('public')); //check folder public for requested files
//check request for post data with data than needed to be parsed
//if data from form arive put to req.body!!
app.use(express.urlencoded({ extended: false })); 
//set cookie interface - read, set, clear or save cookie (res.cookies, req.cookies)
app.use(cookieParser());
//check request for cookie with token, if not set user to guest
app.use(authMiddleware);

//just set handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine','hbs');

//all routes
app.use(routes); //must by aways last middleware

//TODO Change database name
mongoose.connect('mongodb://localhost:27017/course-book');

mongoose.connection.on('connected', () => console.log('DB is connected'));
mongoose.connection.on('disconnected', () => console.log('DB is disconnected'));
//console.log if error in DB
mongoose.connection.on('error', (err) => console.log(err));

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));