const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/db', (req, res) => {
  console.log('start get')
  db.Cyoa.find({ id: 1}, (err, result) => {
    console.log('result', result)
    if (err) {
      res.status(404).send('Error accessing database.')
    }
      res.send(result)

  });
})

app.post('/videoCreator', (req, res) => {
  console.log('body', req.body)
  db.save(req.body, (err, result) => {
    if (err) {
      res.status(404).send('Error!')
    } else {
      res.send(result);
    }
  })
})

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});