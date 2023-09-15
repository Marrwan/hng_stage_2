let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');

let indexRouter = require('./routes/index');

require('dotenv').config();
let app = express(); 

// Start the DB server
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);

module.exports = app;
