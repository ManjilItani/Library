const express = require('express');

const router = express.Router();

const Book = require('../models/Book');

const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

//@route   Get api/books
//@desc    Get all the books
//@access  Private
router.get('/', auth, async (req, res) => {
  try {
    const books = await Book.find({ book: req.book.id }).sort({ data: -1 });

    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/books
//@desc     Add new book
//@access   Private
router.post(
  '/',
  [
    auth,
    [
      check('book_name', 'Name of the Book required').not().isEmpty(),
      check('author', 'Author name is required'),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, authors, available } = req.body;

    try {
      const newBook = new Book({
        book_name,
        authors,
        available,
      });

      const book = await newBook.save();
      res.json(book);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
