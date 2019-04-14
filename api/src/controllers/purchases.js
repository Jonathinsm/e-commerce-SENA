'use strict'

const mysqlConn = require('../middlewares/database');

//Metodo que nos permite obtener todas las compras
function GetPurchases (req,res){
    mysqlConn.query('SELECT * FROM compra', (err,rows,fields) =>{
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

//Metodo que registra el detalle de una compra
function RegisterDetailPurchase(req,res){
    const {} = req.body;
    mysqlConn.query('INSERT INTO detalle compras (detcomIdProducto,detcomIdCompra,detcomCantidad,detcomPrecio) VALUES (?,?,?,?)',[], (err,rows,fields)=>{

    })
}

//Metodo que permite registrar una compra
function RegisterPurchase (req,res){
    const {comId,total,proveedor,usuario} = req.body;
    if(comId && total && proveedor && usuario){
        mysqlConn.query('INSERT INTO compras (comId,comTotal,comIdProveedor,comIdUsuario) VALUES (?,?,?,?)', [comId,total,proveedor,usuario], (err, rows, fields)=>{
            if(!err){
                res.json({Status:'Compra registrada'});
            }else{
                console.log(err);
            };       
        }); 
    }else{
        res.json({Status:"Todos los datos son nescesarios"});
    };
};

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
    RegisterPurchase,
    getAtrributes
}