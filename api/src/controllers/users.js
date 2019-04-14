'use strict'

const mysqlConn = require('../middlewares/database');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

//Metodo que nos permite obtener todos los usuarios
function GetUsers (req,res){
    mysqlConn.query('SELECT * FROM usuarios', (err,rows,fields) =>{
        if(!err){
            if(rows.length > 0){
                var usuarios = rows;
                res.json(usuarios);
            }else{
                res.json({status:"No se encontraron usuarios"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que nos perrmite buscar un usuario
function FindUser (req,res){
    const { id } = req.params;
    mysqlConn.query('SELECT * FROM usuarios WHERE usuId = ?', [id], (err, rows, fields)=>{
        if(!err){
            if(rows.length > 0){
                var usuario = rows[0];
                res.json(usuario);
            }else{
                res.json({status:"No se encontro el usuario"});
            }
        }else{
            console.log(err);
        };
    });
};

//Metodo que permite crear un nuevo usuario
function CreateUser (req,res){
    const {usuId, identificacion, nombre, apellido, direccion, telefono, correo, contrasena, idrole, idarea, idtarjeta} = req.body;
    const query = `
        SET @id = ?;
        SET @identificacion = ?;
        SET @nombre  = ?;
        SET @apellido = ?;
        SET @direccion = ?;
        SET @telefono = ?;
        SET @correo = ?;
        SET @contrasena = ?;
        SET @idrole = ?;
        SET @idarea = ?;
        SET @idtarjeta = ?;
        CALL EditarOAgregarUsuario(@id, @identificacion, @nombre, @apellido, @direccion, @telefono, @correo, @contrasena, @idrole, @idarea, @idtarjeta);
    `;
    if(identificacion && nombre && apellido && direccion && telefono && correo && contrasena){
        mysqlConn.query('SELECT * FROM usuarios WHERE usuIdentificacion = ? OR usuCorreo = ?', [identificacion,correo], (err, rows, fields)=>{
            if(!err){
                if(rows.length>0){
                    res.json({status:'El usuario ya existe'});
                }else{
                    bcrypt.hash(contrasena, null,null, (err,hash)=>{

                        mysqlConn.query(query, [usuId, identificacion, nombre, apellido, direccion, telefono, correo, hash, idrole, idarea, idtarjeta], (err, rows, fields)=>{
                            if(!err){
                                res.json({message: "Usuario  guardado"});
                            }else{
                                console.log(err);
                            };       
                        });
                    });    
                };
            }else{
                console.log(err);
            };
        });
    }else{
        res.json({status:"Todos los datos son nescesarios"});
    };
};

//Metodo que nos permite acualizar un usuario
function UpdateUser (req,res) {
    const { usuId, usuIdentificacion, usuNombre, usuApellido, usuDireccion, usuTelefono, usuCorreo, usuContrasena, usuIdRole, usuIdArea, usuIdTarjeta} = req.body;
    const query = `
    SET @id = ?;
    SET @identificacion = ?;
    SET @nombre  = ?;
    SET @apellido = ?;
    SET @direccion = ?;
    SET @telefono = ?;
    SET @correo = ?;
    SET @contrasena = ?;
    SET @idrole = ?;
    SET @idarea = ?;
    SET @idtarjeta = ?;
    CALL EditarOAgregarUsuario(@id, @identificacion, @nombre, @apellido, @direccion, @telefono, @correo, @contrasena, @idrole, @idarea, @idtarjeta);
`;
if(usuIdentificacion && usuNombre && usuApellido && usuDireccion && usuTelefono && usuCorreo){
    mysqlConn.query(query, [usuId, usuIdentificacion, usuNombre, usuApellido, usuDireccion, usuTelefono, usuCorreo, usuContrasena, usuIdRole, usuIdArea, usuIdTarjeta], (err, rows, fields)=>{
        if(!err){
            res.json({message: "Usuario actualizado"});
        }else{
            console.log(err);
        };       
    });
    }else{
        res.json({status:"Todos los datos son nescesarios"});
    };
};

//Metodo que nos permite eliminar un usuario
function DeleteUser (req,res){
    const { id } = req.params;
    mysqlConn.query('DELETE FROM usurios WHERE usuId = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json({status:'Usuario eliminado'});
        }else{
            console.log(err);
        };
    });
};

//Metodo que nos permite loguear un usuario en el sistema
function LoginUser(req,res){
    const { correo, contrasena, gettoken } = req.body;
    mysqlConn.query('SELECT * FROM usuarios WHERE usuCorreo = ?', [correo], (err, rows, fields)=>{
        if(!err){
            if(rows.length > 0){
                var usuario = rows[0];
                bcrypt.compare(contrasena, usuario.usuContrasena, (err, check)=>{
                    if(check){
                        if(gettoken){
                            return res.status(200).send({
                                token: jwt.createToken(usuario)
                            });
                        }else{
                            return res.json({usuario});
                        }
                    }else{
                        res.json({message: 'Datos incorrectos'})
                    }
                })
            }else{
                res.status(404).json({ message: "El usuario no existe" });
            }
        }else{
            console.log(err);
        }
    })

}

module.exports = {
    GetUsers,
    FindUser,
    CreateUser,
    UpdateUser,
    DeleteUser,
    LoginUser
}