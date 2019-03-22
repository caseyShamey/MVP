
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('graphs').del()
    .then(function () {
      // Inserts seed entries
      return knex('graphs').insert([
        {id: 1, storyline: 'story one'},
        {id: 2, storyline: 'story two'},
        {id: 3, storyline: 'story 3'}
      ]);
    });
};
