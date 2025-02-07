var express = require('express');
var router = express.Router();
var comprasModel = require('../../models/comprasModel');
var entregasModels = require('../../models/entregasModels');

router.get('/', async (req, res, next)=>{
    var entregas = await entregasModels.getEntregas();

     res.render('admin/entregas', {         
         layout:'admin/layout' ,
         usuario: req.session.nombre,
         entregas
         });
    });




router.get('/agregar', async (req, res, next)=>{
    res.render('admin/entregas', {         
        layout:'admin/layout' ,
        usuario: req.session.nombre,
        //compras
    });
});

router.post('/agregar', async (req, res, next)=>{
    try{
          var estado = false;
          console.log('agregar')  ;
          if(req.body.expedienteOC != "" && req.body.beneficiario!="" && req.body.cantidad != "" && req.body.fechaEntrega !=""){
            await entregasModels.insertarEntregas(req.body);
            estado = await  comprasModel.actualizarStock(req.body);
            console.log(estado);
            if (estado){
                console.log(estado);
                res.redirect('/admin/login');  //?resuelto=true
             } else{
                console.log(estado);
                res.render('admin/entregas', {
                layout:'admin/layout', 
                error:true,
                message: 'No hay cantidad suficiente'                
             });
            
            };
        
          }else{
            console.log(estado);
            res.render('admin/entregas', {
            layout:'admin/layout', 
            error:true,
            message: 'Debe completar todos los campos'                
         });
          }
        
         } catch (error){
        console.log(error);
        res.render('admin/entregas',{
            layout: 'admin/layout',
            error:true,
            message: 'No se cargo la compra'
        });
    }
});

module.exports = router;