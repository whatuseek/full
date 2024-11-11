const nodemailer = require("nodemailer");

// Load environment variables

// require("dotenv").config(); 
//⬆️or below⬇️
const dotenv = require('dotenv');
dotenv.config();


const transporter = nodemailer.createTransport({
service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
    auth: {

    user: process.env.nodeMailer_User,
    pass: process.env.nodeMailer_Pass,
  },
});

// Send email function
function sendMail(toEmail,subject,content){
    const mailOptions = {
    from: process.env.nodeMailer_User,
    to: toEmail,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, (err,info)=>{
    if(err){
      console.error("Error sending email:", err);
    }
    else{
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = sendMail; // Exporting the function for use in other files.

// Example usage
// sendEmail("recipient@example.com", "Test Subject", "Hello, this is a test email!");



