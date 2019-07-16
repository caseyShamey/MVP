const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/init', (req, res) => {
  db.Cyoa.findOne({ head: true}, (err, result) => {
    if (err) {
      res.status(404).send('Error accessing database.')
    }
      res.send(result)

  });
})

app.get('/db', (req, res) => {
  db.Cyoa.find({ id: 1}, (err, result) => {
    if (err) {
      res.status(404).send('Error accessing database.')
    }
      res.send(result)

  });
})

app.get('/getNode', (req, res) => {
  db.Cyoa.findById(req.query._id, (err, result) => {
    if (err) {
      res.status(404).send('Error accessing database.')
    }
      res.send(result)

  });
})

app.post('/save', (req, res) => {
  db.save(req.body, (err, result) => {
    if (err) {
      res.status(404).send('Error!')
    } else {
      res.send(result);
    }
  })
})

app.put('/update', (req, res) => {
  db.Cyoa.findOneAndUpdate({ _id: {$eq: req.query._id}}, req.body, (err, result) => {
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