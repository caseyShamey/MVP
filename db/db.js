const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/story', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

const storySchema = new mongoose.Schema({
  id: Number,
  storyline: String
});

var Cyoa = mongoose.model('Cyoa', storySchema);

var save = (story, callback) => {
  db.collection('cyoas').countDocuments((err, count) => {
    if (err) {
      console.error(err);
    }

    if (count === 0) {
      console.log('No records found.');
      Cyoa.create({
        id: 1,
        storyline: JSON.stringify(story)
      }, (err, story) => {
        if (err) {
          callback(err)
        } else {
          console.log('story', story)
          callback(null, 'Story saved to database.', story)
        }
      })
    } else {
      console.log(`Record found.  Overwriting.`)
      db.dropCollection('cyoas', (err, result) => {
        if (err) {
          console.error(err)
        }
      })
      Cyoa.create({
        id: 1,
        storyline: JSON.stringify(story)
      }, (err, story) => {
        if (err) {
          callback(err)
        } else {
          console.log('story', story)
          callback(null, 'Story saved to database.', story)
        }
      })
    }
  })
}

// save('test3', console.log('done'))



module.exports.save = save;
module.exports.Cyoa = Cyoa;

//put callbacks into .create and others
