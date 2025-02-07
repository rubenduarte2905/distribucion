var pool = require('./bd');



async function getEntregas(){

    var query ='SELECT * FROM entregas';
    var rows = await pool.query(query);
 /*                   const obj = Object.values(rows);
                    // muestro otro formato de fecha
                    let i=0;
                    while(i<obj.length){ 
                        obj[i]["fechaEntrega"]  = convertirFechaCorta(obj[i]["fechaEntrega"]);
                    i++;
                    }*/
    return rows;

    }

async function insertarEntregas(obj){
    try{
        console.log(obj);
        var query = "insert into entregas set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    }catch{
        console.log(error);
        throw error;
    }
} 

module.exports ={ getEntregas,  insertarEntregas } 