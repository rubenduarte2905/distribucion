var express = require('express');
var router = express.Router();

var comprasModel = require('./../models/comprasModel');

var cloudinary = require ('cloudinary').v2;

var nodemailer = require ('nodemailer');

router.get('/compras', async (req, res, next)=>{
    var compras = await comprasModel.getCompras();

    compras = compras.map(compras=>{
        if(compras.imagen_id){
            const imagen = cloudinary.url(compras.imagen_id,{
                width:60,
                height:60,
                crop:'fill'
            });
           
            return{
                ...compras,
                imagen
              }
            }else{
                return{
                    ...compras,
                    imagen:''
                }
            }
        });
    
      res.json(compras);
    });

router.post('/contacto', async (req, res)=>{
  const mail = {
    to: 'rubenduartemarecos@gmail.com',
    subject: 'Contacto Web',
    html:`Se ha contactado ${req.body.nombre} y quiere mas informacion a traves del correo ${req.body.email} <br> ademas comentó ${req.body.mensaje} <br> su telefono es ${req.body.telefono}`
  }  
  const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
             user:process.env.SMTP_USR,
             pass:process.env.SMTP_PASS 
        }
  });


       await transport.sendMail(mail);

       res.status(201).json({
        error:false,
        message: 'Mensaje enviado'
       })
});


module.exports = router;