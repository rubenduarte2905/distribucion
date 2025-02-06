var express = require('express')
var router = express.Router();

var usuariosModel = require('../../models/usuariosModels');

router.get('/', function (req, res, next){
    res.render('admin/login',{      //hbs
        layout:'admin/layout',
    });
});


router.get('/logout', function (req, res, next){
    req.session.destroy();
    res.render('admin/login', {         //login.hbs
        layout:'admin/layout'           //layout distintos para index.js y user.js
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

            
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            req.session.rol = data.rol;

              
                if(data.rol === "COMPRAS"){
                    console.log("(2-a) "+rol);
                    res.redirect('/admin/compras');
                }else if(data.rol === "DISTRIBUCION"){
                    console.log("(2-b) "+rol);
                    res.redirect('/admin/entregas');

                }
            }
         } catch (error){
        console.log(error);
    }
})


module.exports = router;
