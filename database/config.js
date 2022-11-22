const mongose = require('mongoose');

const conexion = async()=>{
    try{
        await mongose.connect(process.env.MONGOURI);
        console.log("base de datos conectada");
    }catch(error){
        console.log(error);
        throw new Error("error al conectar a la bd");
    }
}

module.exports = conexion;