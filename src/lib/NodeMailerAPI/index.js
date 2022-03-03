const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
 service: "Gmail",
 port: 3001,
 secure: true,
 auth: {
   user: "raj.tyagi2000@gmail.com",
   pass: "vzcdimepwejuvjzt",
 }
//  ,
//  tls: {rejectUnauthorized: false}
});

transporter.verify((err, success) => {  
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
    let mailOptions = {
      from: "raj.tyagi2000@gmail.com",
      to: req.body.email,
      subject: "Order Confirmed",
      text: "Hi from your nodemailer API",
      html: ` <h3>Hello ${req.body.name},</h3>
      <h3> Thanks for shopping with ShubKart, We aim to give you a wonderful experience of Shopping here.</h3>
      <h3> Regards <br/> 
      CEO, ShubhCart </h3>   
      `
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
        res.status(400).send("mail not sent");
      } else {
        console.log("Email sent successfully");
        res.status(201).send("mail was sent");
      }
    });
   });

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});