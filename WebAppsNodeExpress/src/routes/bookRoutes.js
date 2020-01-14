const express = require('express');
const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Love',
    genre: 'Romance',
    author: 'Spek Poy',
    read: false
  }
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('bookListView', {
      title: 'Library',
      nav: [{ title: 'Books', link: '/books' },
        { title: 'Authors', link: '/authors' }],
      books
    });
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;

    res.render('bookView', {
      title: 'Library',
      nav: [{ title: 'Books', link: '/books' },
        { title: 'Authors', link: '/authors' }],
      book: books[id]
    });
  });

module.exports = bookRouter;
