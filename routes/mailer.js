const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utsavvasoya99@gmail.com", //Add Mail Hear
    pass: "hntqedkgfgzpbxtd", //Add Password Hear
  },
});

router.post("/query", async (req, res) => {
  await transporter.sendMail(
    {
      from: "utsavvasoya99@gmail.com", // Add Mail Hear
      to: "utsavvasoya99@gmail.com", // Add Mail Hear
      subject: `Contact Me`, // Subject line

      text: `Name: ${req.body.name} email:${req.body.email} messaage: ${req.body.message}`, // plain text body

      html: `<p> 
              <h1> Query for: </h1>
              <hr>
              Name: ${req.body.name}
              <hr>
              Number: ${req.body.number}
              <hr> 
              email: ${req.body.email}
              <hr> 
              Subject: ${req.body.subject}
              <hr> 
              Message: ${req.body.message}
              <hr>
              <br> 
              </p>`, // html body
    },
    (err, info) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Mail Send Error",
        });
      } else {
        res.status(201).send({
          success: true,
          message: "Contact Mail Send!!",
        });
      }
    }
  );
});

module.exports = router;
