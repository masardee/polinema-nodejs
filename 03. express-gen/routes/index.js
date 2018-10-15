var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
// KONTAK
router.get('/kontak', function(req, res, next) {
  res.render('fields.pug', { title: 'Kontak', address: 'Malang', phone: '0812345678', email: 'ardiimawan@gmail.com' });
});
// ABOUT
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
// SUBMIT
router.post('/submit', function(req, res, next) {
  res.send(req.body)


















  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ardiimawan@gmail.com',
      pass: 'NengnengnongnenG!@3'
    }
  });
  



















  var mailOptions = {
    from: 'ardiimawan@gmail.com',
    to: 'ardiimawan@gmail.com',
    subject: 'Email from ' + req.body.nama,
    text: req.body.pesan
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send("ERROR!");
      console.log(error);
    } else {
      res.send("Sukses!");
      console.log('Email sent: ' + info.response);
    }
  });

});


module.exports = router;
