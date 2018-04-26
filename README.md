# livepinTask

This app requires postgreSQL. Download and instructions can be found here: http://postgresapp.com/

-API keys for sendGrid and Twilio will have to be sent from me.

-paste API keys in `services/message.js`

## Copy and paste these commands into your command line
npm install

npm install -g knex

createdb messages

knex migrate:latest

npm start

-make sure npm pg is version 6.0.0 (npm pg -v)

-navigate to localhost:3000/messages/new

-Because the database is local, clicking the link from the text message will not work, so I've also included the message itself with the link.
Email links will work provided they are opened on the same device as the database.
