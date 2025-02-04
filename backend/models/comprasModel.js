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



//---FUNCIONES---------------------------------------------------------

//Convierte a otro formato de fecha
function convertirFechaCorta(fecha){
   
    dia = ((fecha.getDate()/10) < 1) ? ("0"+fecha.getDate()) : fecha.getDate() ;
    mes = fecha.getMonth()+1;
    mes = (mes/10 < 1)? "0"+mes : mes;
    anio = fecha.getFullYear();
   
        return dia+"-"+mes+"-"+anio;
    }
    

module.exports ={ getCompras,  deleteComprasById, insertCompra, getCompraById, modificarCompraById } 