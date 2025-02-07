var pool = require('./bd');

async function getCompras(){

    var query ='SELECT * FROM compras';
    var rows = await pool.query(query);
                    const obj = Object.values(rows);
                    // muestro otro formato de fecha
                    let i=0;
                    while(i<obj.length){ 
                        obj[i]["fechaAltaEntregas"]  = convertirFechaCorta(obj[i]["fechaAltaEntregas"]);
                    i++;
                    }
    return rows;

    }

async function insertCompra(obj){
    try{
        var query = "insert into compras set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    }catch{
        console.log(error);
        throw error;
    }
}    

async function deleteComprasById(id){
    console.log("delete");
    var query ="DELETE FROM compras WHERE id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getCompraById(id){
    var query ="Select * FROM compras WHERE id = ?";
    var rows = await pool.query(query,[id]);
    const obj = Object.values(rows);
    // muestro otro formato de fecha
    let i=0;
    while(i<obj.length){ 
        obj[i]["fechaAltaEntregas"]  = convertirFechaCorta(obj[i]["fechaAltaEntregas"]);
       i++;
    }
    return rows[0];
}

async function modificarCompraById(obj, id){
    try{

         var query ="update compras set ? where id=?";
         var rows = await pool.query(query, [obj, id]);
         return rows;
    }catch (error) {
        throw error;
    }

}

//--------------------------------------------------------------------

async function getCompraByExpediente(expediente){
    console.log ("Exp: "+expediente);
    var query ="Select * FROM compras WHERE expedienteOC = ?";
    var rows = await pool.query(query,[expediente]);
    return rows[0];
}


async function actualizarStock(obj){
    console.log("+++++"+obj.expedienteOC);
    estadoActual = await getCompraByExpediente(obj.expedienteOC)
    cantidadTotal = parseInt(estadoActual.cantidadTotal);
    cantidad = parseInt(obj.cantidad);
    if (cantidad > cantidadTotal){
        return false;
    }else{
    cantidadTotal -=cantidad;
    estadoActual.cantidadTotal = cantidadTotal.toString();
    console.log("est: "+estadoActual.cantidadTotal);
    
    await modificarCompraById(estadoActual, estadoActual.id);
    return true;

    }
    
        

}


//---FUNCIONES---------------------------------------------------------

//Convierte a otro formato de fecha
function convertirFechaCorta(fecha){
   
    dia = ((fecha.getDate()/10) < 1) ? ("0"+fecha.getDate()) : fecha.getDate() ;
    mes = fecha.getMonth()+1;
    mes = (mes/10 < 1)? "0"+mes : mes;
    anio = fecha.getFullYear();
   
        return dia+"-"+mes+"-"+anio;
    }
    

module.exports ={ getCompras,  deleteComprasById, insertCompra, getCompraById, modificarCompraById, actualizarStock, getCompraByExpediente } 