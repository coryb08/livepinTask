const express = require("express")
const router = express.Router()
const knex = require("../db/knex")

// get messages http://localhost:3000/messages
router.get("/", function(req, res, next) {
  knex("message")
    .select()
    .then(messages => {
      res.render("all", { messages: messages })
    })
})

router.get("/new", function(req, res, next) {
  res.render("new")
})

module.exports = router
