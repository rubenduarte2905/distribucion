var express = require('express');
var router = express.Router();
var comprasModel = require('../../models/comprasModel');
var util = require('util');
var cloudinary = require ('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); 
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async (req, res, next)=>{
    var compras = await comprasModel.getCompras();

    compras = compras.map(compras=>{
        if(compras.imagen_id){
            const imagen = cloudinary.image(compras.imagen_id,{
                width:100,
                height:100,
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
    
    fecha= compras.fechaAltaEntregas;
    console.log(fecha+" "+compras.fechaAltaEntregas);

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
         var imagen_id ='';
         if (req.files && Object.keys(req.files).length>0){
            imagen = req.files.imagen;
            imagen_id = (await uploader(imagen.tempFilePath)).public_id; 
         }
          if(req.body.expedienteOC != "" && req.body.proveedor !="" && req.body.mercaderia !="" 
             && req.body.fechaAltaEntregas !="" && req.body.lugarDeposito !="" && req.body.cantidadTotal != ""){
            await comprasModel.insertCompra({...req.body, imagen_id});
            res.redirect('/admin/compras');
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
    let compras = await comprasModel.getCompraById(id);
    if (compras.imagen_id){
        await (destroy(compras.imagen_id));
    }  
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
         let imagen_id = req.body.imagen_original ;
         let borrar_imagen_vieja = false;
         if (req.body.borrar_imagen ==="1"){
            imagen_id = null;
            borrar_imagen_vieja = true;
         }else{
            if (req.files && Object.keys(req.files).length>0){
                imagen = req.files.imagen;
                imagen_id = (await uploader(imagen.tempFilePath)).public_id;
                    borrar_imagen_vieja = true;
            }
         } 
         if (borrar_imagen_vieja && req.body.imagen_original){
            await (destroy(req.body.imagen_original));
         } 



          let obj={
            expedienteOC: req.body.expedienteOC,
            proveedor: req.body.proveedor,
            mercaderia: req.body.mercaderia,
            fechaAltaEntregas: convertirFecha(req.body.fechaAltaEntregas),
            lugarDeposito: req.body.lugarDeposito,
            cantidadTotal: req.body.cantidadTotal,
            imagen_id
          }
          
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

//-------------------------------------------------------------------------
function convertirFecha(string) {
    var fecha = string.split('-');
    console.log("zz "+fecha[2] + '-' + fecha[1] + '-' + fecha[0]);
    return fecha[2] + '-' + fecha[1] + '-' + fecha[0];
}

module.exports = router