const handlebars = require("handlebars");
const nodemailer = require("nodemailer");
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const sendEmail = async (options) => {
  let html = await readFile(options.templatePath, "utf8");
  let template = handlebars.compile(html);

  let htmlToSend = template(options.data);
  console.log("this is in mailer function ", options.data);
  //Send OTP to the user's email
  let transporter = nodemailer.createTransport({
    service: "Gmail", // Change to your email service
    auth: {
      user: "vocaselect@gmail.com",
      pass: "beqedpjvbnxnnanl",
    },
  });

  let mailOptions = {
    from: "vocaselect@gmail.com",
    to: options.to,
    subject: options.subject,
    html: htmlToSend,
    // text: `Your OTP: ${optGenerated}, click on reset password to reset your password <a href="${link}">Reset Password</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending OTP email" });
    } else {
      console.log("OTP email sent:", info.response);
      res.status(200).json({ message: "OTP sent successfully" });
    }
  });
};
module.exports = sendEmail;
