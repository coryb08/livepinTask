# livepinTask


## Copy and paste these commands into your command line
npm install

npm install -g knex

createdb messages

knex migrate:latest

npm start

-navigate to localhost:3000/messages/new

-make sure npm pg is version 6.0.0

-API keys for sendGrid and Twilio will have to be sent from me.

-paste API key in `services/message.js`

-Because the database is local, clicking the link from the text message will not work, so I've also included the message itself with the link.
Email links will work provided they are opened on the same device as the database.
