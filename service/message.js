// Twilio Credentials
const accountSid = "PASTE ACCOUNTSID HERE AS STRING"
const authToken = "PASTE TWILIO AUTH TOKEN HERE AS STRING"
// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken)
const sgMail = require("@sendgrid/mail")
const apik = "PASTE SENDGRID API KEY HERE AS STRING"

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
