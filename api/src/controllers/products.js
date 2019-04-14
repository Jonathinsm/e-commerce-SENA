'use strict'

const mysqlConn = require('../middlewares/database');

//Metodo que nos permite obtener todos los productos
function GetProducts (req,res){
    const query =`
SELECT P.prodId,P.prodNombre,P.prodDescripcion,P.prodPrecio,P.prodFechaCreacion,U.uniNombre,C.catNombre,PR.preNombre,M.marNombre,US.usuNombre,US.usuApellido,PO.proNombre FROM productos P
INNER JOIN unidades U ON P.prodIdUnidad=U.uniId
INNER JOIN categorias C ON P.prodIdCategoria=C.catId
INNER JOIN presentaciones PR ON P.prodIdPresentacion=PR.preId
INNER JOIN marcas M ON P.prodIdMarca=M.marId
INNER JOIN usuarios US ON P.prodIdUsuario=US.usuId
INNER JOIN proveedores PO ON M.marIdProv=PO.proId
;
    `;
    mysqlConn.query(query, (err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var productos = rows;
                res.json(productos);
            }else{
                res.json({status:"No se encontraron productos"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que nos perrmite buscar un producto
function FindProduct (req,res){
    const { id } = req.params;
    mysqlConn.query('SELECT * FROM producto WHERE id_producto = ? OR nombre_prod = ?', [id,id], (err, rows, fields)=>{
        if(!err){
            if(rows.length > 0){
                var producto = rows[0];
                res.json(producto);
            }else{
                res.json({status:"No se encontro el producto"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que permite crear un nuevo producto
function CreateProduct (req,res){
    const {prodId,nombre,descripcion,precio,idunidad,idcategoria,idpresentacion,idmarca,idusuario} = req.body;
    const query = `
        SET @id = ?;
        SET @nombre = ?;
        SET @descripcion  = ?;
        SET @precio = ?;
        SET @idunidad = ?;
        SET @idcategoria = ?;
        SET @idpresentacion = ?;
        SET @idmarca = ?;
        SET @idusuario = ?;
        CALL EditarOAgregarProducto(@id,@nombre,@descripcion,@precio,@idunidad,@idcategoria,@idpresentacion,@idmarca,@idusuario);
    `;
    if(nombre && precio && idunidad && idcategoria && idpresentacion && idmarca && prodId){
        mysqlConn.query(query, [prodId,nombre,descripcion,precio,idunidad,idcategoria,idpresentacion,idmarca,idusuario], (err, rows, fields)=>{
            if(!err){
                res.json({message:'Producto creado'});
            }else{
                console.log(err);
            };       
        }); 
    }else{
        res.json({Status:"Todos los datos son nescesarios"});
    };
};

//Metodo que nos permite acualizar un producto
function UpdatePrduct (req,res) {
    const {nombre_prod,descripcion_prod,precio_prod,idunidad,idcategoria,idpresentacion,idmarca,idempleado} = req.body;
    const { id } = req.params;
    const query = `
    SET @id = ?;
    SET @nombre_prod = ?;
    SET @descripcion_prod  = ?;
    SET @precio_prod = ?;
    SET @idunidad = ?;
    SET @idproveedor = ?;
    SET @idcategoria = ?;
    SET @idpresentacion = ?;
    SET @idmarca = ?;
    SET @idempleado = ?;
    CALL EditarOAgregarProducto(@id,@nombre_prod,@descripcion_prod,@precio_prod,@idunidad,@idcategoria,@idpresentacion,@idmarca,@idempleado);
    `;
    mysqlConn.query(query, [id,nombre_prod,descripcion_prod,precio_prod,idunidad,idcategoria,idpresentacion,idmarca], (err, rows, fields)=>{
        if(!err){
            res.json({Status:'Producto actualizado'});
        }else{
            console.log(err);
        };
    });
};

function getAtrributes(req,res){
    var sql = `SELECT * FROM unidades;
    SELECT * FROM categorias;
    SELECT * FROM presentaciones;
    SELECT * FROM marcas
    `;
    mysqlConn.query(sql,(err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var unidades = rows[0];
                var categorias = rows[1];
                var presentaciones = rows[2];
                var marcas = rows[3];
                res.json({
                    unidades,
                    categorias,
                    presentaciones,
                    marcas
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
    GetProducts,
    FindProduct,
    CreateProduct,
    UpdatePrduct,
    getAtrributes
}