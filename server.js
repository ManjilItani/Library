const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database

connectDB();

app.get('/', (req, res) => res.send({ msg: 'Library app coming soon' }));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () =>
  console.log(`Server for Library Initiated on port ${PORT}`)
);
