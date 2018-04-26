const express = require("express")
const router = express.Router()
const knex = require("../db/knex")

// get messages http://localhost:3000/messages
router.get("/", (req, res, next) => {
  knex("message")
    .select()
    .then(messages => {
      res.render("all", { messages: messages })
    })
})

router.get("/new", (req, res, next) => {
  res.render("new")
})

router.post("/", (req, res) => {
  console.log("BODY: ", req.body)
  let message = {
    content: req.body.content,
    countrycode: req.body.countrycode,
    phone: req.body.phone,
    email: req.body.email
  }
  knex("message")
    .insert(message, "*")
    .then(messages => {
      message = messages[0]
      res.redirect(`/message/${message.id}`)
    })
})

module.exports = router
