var pool = require('./bd');

async function getCompras(){

            var query ='SELECT * FROM compras';
            var rows = await pool.query(query);
           
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

module.exports ={ getCompras,  deleteComprasById, insertCompra, getCompraById, modificarCompraById } 