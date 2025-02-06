var express = require('express');
var router = express.Router();
var comprasModel = require('./../models/comprasModel');

var cloudinary = require ('cloudinary').v2;



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

module.exports = router;