const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/storyNode', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

const storyNode = new mongoose.Schema({
  head: Boolean,
  parent: String,
  link: String,
  choiceOne: String,
  choiceTwo: String,
  childOne: String,
  childTwo: String
});

var Cyoa = mongoose.model('Cyoa', storyNode);

var save = (node, callback) => {
  console.log('hit save')
 Cyoa.create(node, callback)
}



module.exports.save = save;
module.exports.Cyoa = Cyoa;
