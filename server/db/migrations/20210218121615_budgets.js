exports.up = function (knex) {
  return knex.schema.createTable('budgets', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('income')
    table.integer('expenses')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('budgets')
}
