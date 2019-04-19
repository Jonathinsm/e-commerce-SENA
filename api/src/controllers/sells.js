'use strict'

const mysqlConn = require('../middlewares/database');

//Metodo que nos permite obtener las ventas
function GetSells (req,res){
    const query = `
    SELECT V.ventId,V.ventFecha,V.venTotal,U.usuNombre,U.usuId,U.usuApellido,U.usuCorreo FROM ventas V
    INNER JOIN usuarios U ON V.venIdCliente=U.usuId
    `;
    mysqlConn.query(query, (err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var ventas = rows;
                res.json(ventas);
            }else{
                res.json({status:"No se encontraron ventas"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que registra una venta y sus  detalles
function RegisterSell(req,res){
    const {venIdCiente,venTotal,items } = req.body;
    try
    {
        mysqlConn.query('INSERT INTO ventas (venTotal,venIdCliente) VALUES (?,?)',[venTotal,venIdCiente], (err,result)=>{
            if(err){
                console.log(err)
            }else{
                items.forEach(element => {
                    mysqlConn.query('INSERT INTO detalleventas (detvenIdVenta,detvenIdProducto,detvenCantidad,detvenTotal) VALUES (?,?,?,?)',
                    [result.insertId,
                    element.prodid,
                    element.cantidad,
                    element.precio], (err,rows,fields)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("Registro Guardado")
                        }
                    })
                });
                res.json({status:"Venta Registrada"});
            }
        })

    }
    catch (ex)
    {
        throw ex;
    }
}

module.exports = {
    RegisterSell,
    GetSells
}