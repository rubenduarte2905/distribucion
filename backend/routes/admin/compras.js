var express = require('express');
var router = express.Router();

var comprasModel = require('../../models/comprasModel');

router.get('/', async (req, res, next)=>{
    var compras = await comprasModel.getCompras();
    res.render('admin/compras', {         
        layout:'admin/layout' ,
        usuario: req.session.nombre,
        compras
    });
});


router.get('/agregar', (req, res, next)=>{
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});

router.post('/agregar', async (req, res, next)=>{
    try{
          console.log("AGRE GAR");
          if(req.body.expedienteOC != "" && req.body.proveedor !="" && req.body.mercaderia !="" && req.body.fechaAltaEntregas !="" && req.body.lugarDeposito !="" && req.body.cantidadTotal != ""){
            await comprasModel.insertCompra(req.body);
            res.redirect('/admin/compras')
          }else{
            res.render('/admin/agregar', {
                layout:'admin/layout', 
                error:true,
                message: 'Todos los campos son requeridos'
            })
          }
    }catch (error){
        console.log(error);
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error:true,
            message: 'No se cargo la compra'
        });
    }
});
-
router.get('/eliminar/:id', async (req, res, next)=>{

    const id =req.params.id;
    await comprasModel.deleteComprasById(id);
    res.redirect('/admin/compras')
});

router.get('/modificar/:id', async (req, res, next)=>{

    let id =req.params.id;
    let compra = await comprasModel.getCompraById(id);
    res.render('admin/modificar', { 
        layout: 'admin/layout',
        usuario: req.session.nombre,
        compra
    });
});

router.post('/modificar', async (req, res, next)=>{
   
    try{
          let obj={
            expedienteOC: req.body.expedienteOC,
            proveedor: req.body.proveedor,
            mercaderia: req.body.mercaderia,
            fechaAltaEntregas: req.body.fechaAltaEntregas,
            lugarDeposito: req.body.lugarDeposito,
            cantidadTotal: req.body.cantidadTotal
          }
            console.log("3 - "+obj);
            await comprasModel.modificarCompraById(obj, req.body.id);
            res.redirect('/admin/compras');
        }  catch (error){
        console.log(error);
        res.render('admin/modificar',{
            layout: 'admin/layout',
            error:true,
            message: 'No se modificó la compras'
        });
    }
});  

module.exports = router