const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendSMS = (to, message) => {
    client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: to
    })
    .then(message => console.log('Message sent: ', message.sid))
    .catch(error => console.error('Error sending message: ', error));
};

// Send a message to the specified phone number
sendSMS('+250793898872', 'This is a test message from Twilio!');
