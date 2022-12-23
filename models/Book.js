const { default: mongoose } = require('mongoose');

const mongoose = requre('mongoose');

const BookSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books',
  },
  name: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: True,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('book', BookSchema);
