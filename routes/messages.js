const express = require("express")
const router = express.Router()
const knex = require("../db/knex")
const messageService = require("../service/message.js")

// get messages http://localhost:3000/messages
router.get("/", (req, res, next) => {
  knex("message")
    .select()
    .then(messages => {
      res.render("all", { messages: messages })
    })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  respondAndRenderTodo(id, res)
})

router.post("/", (req, res) => {
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
      messageService.sendLink(
        message.id,
        message.countrycode,
        message.phone,
        message.email,
        message.content
      )
      res.redirect(`/messages/${message.id}`)
    })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  knex("message")
    .select()
    .where("id", id)
    .first()
    .then(message => {
      res.render("show", message)
    })
})

function respondAndRenderTodo(id, res) {
  if (validId(id)) {
    knex("message")
      .select()
      .where("id", id)
      .first()
      .then(message => {
        res.render("show", { message: message.content })
      })
  } else {
    res.render("new")
  }
}

function validId(id) {
  return !isNaN(id)
}

module.exports = router

//+15018005010
//email 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
