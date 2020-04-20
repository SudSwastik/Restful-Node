const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', {useNewUrlParser: true} );
const Book = require('./model/bookModel');
const port = process.env.PORT || 3000;
const bookRouter = require('./routes/bookRouter')(Book);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome To Node');
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
