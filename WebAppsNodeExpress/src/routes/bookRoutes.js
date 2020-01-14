const express = require('express');
const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'Genre: Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Love is Truth',
      genre: 'Genre: Romance',
      author: 'Spek Poy',
      read: false
    }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView', {
        title: 'Library',
        nav,
        books
      });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;

      res.render('bookView', {
        title: 'Library',
        nav,
        book: books[id]
      });
    });
  return bookRouter;
}

module.exports = router;
