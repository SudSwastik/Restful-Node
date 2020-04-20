const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', {useNewUrlParser: true} );
const bookRouter = express.Router();
const Book = require('./model/bookModel');
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
      if(err) {
        return res.send(err);
      }
      return res.json(books);
    }

    );
  });

bookRouter.route('/books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome To Node');
});

app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
