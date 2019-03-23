const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knexfile.js');
const { Client } = require('pg');

const app = express();
const client = new Client();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.get('/story', (req, res) => {
  knex.select().from('graphs')
    .then((data) => {
      res.send(data)
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});