var express = require('express');
var router = express.Router();
var comprasModel = require('../../models/comprasModel');
var entregasModels = require('../../models/entregasModels');

router.get('/', async (req, res, next)=>{
    res.render('admin/entregas', {         
        layout:'admin/layout' ,
        usuario: req.session.nombre,
        //compras
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
          console.log('agregar')  ;
          if(req.body.expedienteOC != "" && req.body.beneficiario!="" && req.body.cantidad != "" && req.body.fechaEntrega !=""){
            await entregasModels.insertarEntregas(req.body);
            await comprasModel.actualizarStock(req.body);
            res.redirect('/admin/entregas');  //?resuelto=true
          }else{
            res.render('/admin/entregas', {
                layout:'admin/layout', 
                error:true,
                message: 'Todos los campos son requeridos'
            })
          }
    }catch (error){
        console.log(error);
        res.render('admin/entregas',{
            layout: 'admin/layout',
            error:true,
            message: 'No se cargo la compra'
        });
    }
});

module.exports = router;