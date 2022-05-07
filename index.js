const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require ('ejs');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// ejs
app.set('view engine','.ejs');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//routes
app.use('/api',require('./routes/app'));

//public
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'),() =>{
    console.log('server on port:', app.get('port'))
});