var express = require('express')
var router = express.Router();

var usuariosModel = require('../../models/usuariosModels');

router.get('/', function (req, res, next){
    res.render('admin/login',{      //hbs
        layout:'admin/layout',
    });
});

router.post ('/', async (req, res, next)=>{
     
    try{
            
            var usuario = req.body.usuario;
            var password = req.body.password;
            var rol = req.body.rol;
           
            var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password, rol);
            console.log("(1) "+rol);

            if (data != undefined){
              
                if(data.rol == "COMPRAS"){
                    console.log("(2) "+rol);
                    res.redirect('/admin/compras');
                }else{
                          res.render('admin/login',{
                          layout: 'admin/layout',
                          error:true
                      });
                    }
            }
         } catch (error){
        console.log(error);
    }
})


module.exports = router;
