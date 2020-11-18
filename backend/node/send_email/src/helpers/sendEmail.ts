const sgMail = require("@sendgrid/mail");

// SET TYPES

interface msg {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendEmail = () => {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: string) => {
      console.error(error);
    });
};

module.exports = sendEmail;
