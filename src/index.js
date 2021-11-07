const path = require('path');
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const handlebars = require('express-handlebars');
const route = require('./routes');

const app = express();

//Middle Ware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP logger
app.use(morgan('combined'));

//routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
