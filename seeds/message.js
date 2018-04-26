exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("message")
    .del()
    .then(function() {
      // Inserts seed entries
      const messages = [
        {
          content: "here's a new message for you",
          countrycode: "001",
          phone: "5018342250",
          email: "coryb08@yahoo.com"
        }
      ]
      return knex("message").insert(messages)
    })
}
