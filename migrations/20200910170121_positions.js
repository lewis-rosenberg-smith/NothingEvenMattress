
exports.up = function(knex) {
  return knex.schema.createTable('positions', table => {
    table.increments('id').primary()
    table.string('img_url')
    table.string('img_name')
    table.string('position_name')
    table.string('position_description')
    table.string('temperature')
    table.integer('participants')
    table.integer('rating')
    table.string('animal')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('positions')
};
