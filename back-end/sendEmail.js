const nodemailer = require("nodemailer");
const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "muhmdbilal3333@gmail.com",
      // process.env.EMAIL_USER,
      pass: "ddsbrxikfkypdetf"
      // process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;



// ddsbrxikfkypdetf