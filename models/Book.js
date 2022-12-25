const { default: mongoose } = require('mongoose');

// const mongoose = requre('mongoose');

const BookSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books',
  },
  book_name: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('book', BookSchema);
