var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'manuvillani04@gmail.com',
    subject: 'contacto desde la web',
    html: nombre + " " + " se contacto a traves de la web y quiere mas informacion a este correo: "
      + email + ".<br>ademas, dejo este telefono:" + telefono + ".<br> y este mensaje:" + mensaje
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'mensaje enviado correctamente'
  });
});



module.exports = router;
