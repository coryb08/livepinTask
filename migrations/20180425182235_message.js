exports.up = function(knex, Promise) {
  return knex.schema.createTable("message", table => {
    table.increments()
    table.text("content")
    table.text("countrycode")
    table.text("phone")
    table.text("email")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("message")
}
