const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./handlers/errorHandler');
const logger = require('morgan');
const app = express();

app.engine('html', require('hbs').__express);
app.set('view engine', 'html');
//app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger(process.env.NODE_ENV));

app.use('/', routes);

app.use(errorHandler.notFound);

app.use(errorHandler.logErrors);

module.exports = app;