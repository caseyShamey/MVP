
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE graphs(
    id SERIAL PRIMARY KEY NOT NULL,
    storyLine TEXT
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE graphs`
  return knex.raw(dropQuery)
};
