// creating http server using express
const express = require('express');
const app = express();

const hbs = require('express-handlebars');

// path module
const path = require('path');

// will allow us to post raw json data
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));
// view enine 
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    // extention of template files
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

// calling routes
app.use('/', require('./server/router/router'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});