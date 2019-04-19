'use strict'

const mysqlConn = require('../middlewares/database');

//Metodo que nos permite obtener todos los proveedores
function GetProviders (req,res){
    mysqlConn.query('SELECT * FROM proveedores', (err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var proveedores = rows;
                res.json(proveedores);
            }else{
                res.json({status:"No se encontraron proveedores"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que nos perrmite buscar un proveedor
function FindProvider (req,res){
    const { id } = req.params;
    mysqlConn.query('SELECT * FROM proveedor WHERE nit_prov = ?', [id], (err, rows, fields)=>{
        if(!err){
            if(rows.length > 0){
                var proveedor = rows[0];
                res.json(proveedor);
            }else{
                res.json({status:"No se encontro el proveedor"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que permite crear un nuevo proveedor
function CreateProvider (req,res){
    const {id, nit, name, addres, phone, contact} = req.body;
    const query = `
        SET @id = ?;
        SET @nit_prov = ?;
        SET @nombre_prov  = ?;
        SET @direccion_prov = ?;
        SET @telefono_prov = ?;
        SET @nombre_contacto = ?;
        CALL EditarOAgregarProveedor(@id,@nit_prov,@nombre_prov,@direccion_prov,@telefono_prov,@nombre_contacto);
    `;
    if(nit && name && addres && phone && contact){
        mysqlConn.query('SELECT * FROM proveedor WHERE nit_prov = ?', [nit], (err, rows, fields)=>{
            if(!err){
                if(rows.length){
                    res.json({Status:'El proveedor ya existe'});
                }else{
                mysqlConn.query(query, [id,nit,name,addres,phone,contact], (err, rows, fields)=>{
                    if(!err){
                        res.json({Status:'Proveedor guardado'});
                    }else{
                        console.log(err);
                    };       
                }); 
                };
            }else{
                console.log(err);
            };
        });
    }else{
        res.json({Status:"Todos los datos son nescesarios"});
    };
};

//Metodo que nos permite acualizar un proveedor
function UpdateProvider (req,res) {
    const {nit, name, addres, phone, contact} = req.body;
    const { id } = req.params;
    const query = `
    SET @id = ?;
    SET @nit_prov = ?;
    SET @nombre_prov  = ?;
    SET @direccion_prov = ?;
    SET @telefono_prov = ?;
    SET @nombre_contacto = ?;
    CALL EditarOAgregarProveedor(@id,@nit_prov,@nombre_prov,@direccion_prov,@telefono_prov,@nombre_contacto);
    `;
    mysqlConn.query(query, [id,nit,name,addres,phone,contact], (err, rows, fields)=>{
        if(!err){
            res.json({Status:'Proveedor actualizado'});
        }else{
            console.log(err);
        };
    });
};

module.exports = {
    GetProviders,
    FindProvider,
    CreateProvider,
    UpdateProvider
}