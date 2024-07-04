const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const { authMiddleware } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorMiddlewares');

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
}));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });

//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authMiddleware);

app.use(routes);

app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/furniture')
    .then(() => console.log('DB connected'));

app.listen(3030, () => {
    console.log('REST API listening on port 3030');
});