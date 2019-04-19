'use strict'

const mysqlConn = require('../middlewares/database');

//Metodo que nos permite obtener todas las compras
function GetPurchases (req,res){
    const query = `
    SELECT C.comId,C.comFecha,P.proNombre,C.comTotal FROM compras C
    INNER JOIN proveedores P ON C.comIdProveedor=P.proId
    `;
    mysqlConn.query(query, (err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var compras = rows;
                res.json(compras);
            }else{
                res.json({status:"No se encontraron compras"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que nos perrmite buscar una compra
function FindPurchases (req,res){
    const { id } = req.params;
    mysqlConn.query('SELECT * FROM compra WHERE id_compra = ?', [id], (err, rows, fields)=>{
        if(!err){
            if(rows.length > 0){
                var compra = rows[0];
                res.json(compra);
            }else{
                res.json({status:"No se encontro la compra"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que registra una compra y sus detalles
function RegisterPurchase(req,res){
    const { comId,comTotal,provId,usuId,OrderItems} = req.body;
    try
    {
        mysqlConn.query('INSERT INTO compras (comId,comTotal,comIdProveedor,comIdUsuario) VALUES (?,?,?,?)',[comId,comTotal,provId,usuId], (err,rows,fields)=>{
            if(err){
                console.log(err)
            }else{
                OrderItems.forEach(element => {
                    mysqlConn.query('INSERT INTO detallecompras (detcomIdCompra,detcomIdProducto,detcomPrecio,detcomCantidad,detcomTotal) VALUES (?,?,?,?,?)',
                    [element.detcomIdCompra,
                    element.detcomIdProducto,
                    element.detcomPrecio,
                    element.detcomIdCantidad,
                    element.detcomTotal], (err,rows,fields)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("Registro Guardado")
                        }
                    })
                });

                res.json({status:"Compra registrada"});
            }
        })
    }
    catch (ex)
    {
        throw ex;
    }
}

function getAtrributes(req,res){
    var sql = `
    SELECT PR.prodId,PR.prodNombre FROM productos PR;
    SELECT P.proId,P.proNombre FROM proveedores P;
    `;
    mysqlConn.query(sql,(err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var productos = rows[0];
                var proveedores = rows[1];
                res.json({
                    productos,
                    proveedores
                });
            }else{
                res.json({status:"No se encontraron atributos"});
            }
        }else{
            console.log(err);
        };
    });
}

module.exports = {
    GetPurchases,
    FindPurchases,
    getAtrributes,
    RegisterPurchase
}