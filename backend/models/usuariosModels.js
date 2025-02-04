var pool = require('./bd');
var md5 = require ('md5');

async function getUserByUsernameAndPassword(usuario, password, rol){
    try{
            console.log (md5(password));

            var query ='SELECT * FROM USUARIOS WHERE USUARIO =? AND PASSWORD = ? AND ROL = ? LIMIT 1';
            var rows = await pool.query(query, [usuario, md5(password), rol]);

            console.log(rows);
            
            return rows[0];
    }catch(error){
        throw error;
    }


}

module.exports ={ getUserByUsernameAndPassword }