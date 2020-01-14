const express = require('express');
const chalk = require('chalk'); // sets colours on our console messages.
const debug = require('debug')('app'); // better way to send out error messages, easier to keep track of what goin on.
const morgan = require('morgan');// morgan gives you http request info
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.use(morgan('tiny'));// combined gives more info, tiny gives less
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Library' }); // __dirname is where the app.js exectuble lies.
});

app.listen(port, () => {
  debug(`listening at port ${chalk.green(port)}`);
});
