var express = require('express');
var router = express.Router();




    var entregasModels = require('./../models/entregasModels');



    router.get('/entregas', async (req, res, next)=>{
        console.log("api");
        var entregas = await entregasModels.getEntregas();
        res.json(entregas);
        });



module.exports = router;