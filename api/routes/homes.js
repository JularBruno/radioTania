const helpers = require('./_helpers.js')
const express = require('express')
const router = express.Router()
const required = require('../middlewares/token')
import model from '../models/home'
import Debug from 'debug'
const debug = new Debug(`api/home`)
var url = require('url');
var nodemailer = require('nodemailer');

router.get('/', (req, res, next) => {
  return helpers.find(model, req, res);
})

router.get('/:id', (req, res, next) => {
  return helpers.findById(model, req, res)
})

router.post('/', (req, res, next) => {
  return helpers.save(model, req, res)
})

router.put('/:id', (req, res, next) => {
  return helpers.findByIdAndUpdate(model, req, res);
})

router.delete('/all', (req, res, next) => {
  return helpers.deleteAll(model, req, res)
})

router.delete('/:id', (req, res, next) => {
  return helpers.delete(model, req, res)
})

router.post('/login', function (req, res, next) {
    return helpers.login(model, req, res)
})

router.post('/mail', function (req, res, next) {
  console.log('mail')
  const params = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailsenderarcoiris@gmail.com',
      pass: 'Contra0420'
    }
  });
  
  var mailOptions = {
    from: params.mail,
    // to: 'Radiotania2020@gmail.com',
    to: 'brunojular00@gmail.com',
    subject: 'Mail de radiotania.com',
    text: ` telefono: ${params.telefono}
            mensaje: ${params.message}
          `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(401).json({error: error})
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({response: info.response})
    }
  }); 
})

module.exports = router
