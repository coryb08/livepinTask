// Twilio Credentials
const accountSid = "AC515897c83c6aab630c9938f8fa24cac5"
const authToken = "f66d03be6010c68a09ef3251829dc39d"
// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken)
const sgMail = require("@sendgrid/mail")
const apik =
  "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"

module.exports = {
  sendLink: function(id, countrycode, phone, email, content) {
    let sms = function() {
      client.messages
        .create({
          to: "+" + countrycode + phone,
          from: "+15018005010",
          body: `MESSAGE: ${content} LINK: http://localhost:3000/messages/${id}`
        })
        .then(message => console.log(message.sid))
    }

    let mail = function() {
      sgMail.setApiKey(apik)
      const msg = {
        to: email,
        from: "test@example.com",
        subject: "Your Link",
        text: "Link",
        html: `<strong>MESSAGE: http://localhost:3000/messages/${id}</strong>`
      }
      sgMail.send(msg)
    }
    if (!!email && !!phone) {
      return sms(), mail()
    } else if (!!email && !phone) {
      return mail()
    } else if (!email && !!phone) {
      return sms()
    } else {
      console.log("invalid info")
    }
  }
}
