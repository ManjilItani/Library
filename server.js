const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send({ msg: 'Library app coming soon' }));

app.use('/api/books', require('./routes/books'));
app.use('/api/books', require('./routes/users'));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () =>
  console.log(`Server for Library Initiated on port ${PORT}`)
);
