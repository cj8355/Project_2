const router = require('express').Router();
const { User } = require('../../models');
const nodemailer = require("nodemailer");

router.get('/send-email', (req, res) => {
  try {

        console.log("testing tesating");
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: "ashleighwilliams23.AW@gmail.com", // generated ethereal user
          pass: "Catcat23!" // generated ethereal password
        },
      });

      console.log("hello")
    
      // send mail with defined transport object
      transporter.sendMail({
        from: 'ashleighwilliams23.AW@gmail.com', // sender address
        to: "ashleighwilliams23.AW@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
      }).then((info) => {
          console.log("Message sent: %s", info)
      }).catch((err) => {
        if (err) throw err;
      });

      res.json({email: "success"});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
