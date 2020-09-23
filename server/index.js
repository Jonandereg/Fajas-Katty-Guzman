const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const mongoose = require('./models');
const db = mongoose.connection;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db.on('error', console.error.bind(console, 'connection error')); //eslint-disable-line no-console
db.once('open', () => {
  console.log('Database in space 🛰'); //eslint-disable-line no-console

  app.listen(3001, () => {
    console.log('listening in part of space: http://localhost:3001 🛰');
  });
});
