'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'I_am_the_shield_that_proctect_the_realm_of_men';

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({
            message:'La petición no tiene un header de autenticación'
        })
    }
    var tocken = req.headers.authorization.replace(/['"]+/g, '');
    try{
        var payload = jwt.decode(tocken, secret);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                message: 'El token ha espirado'
            });
        }
    }catch(ex){
        return res.status(401).send({
            message: 'Token invalido'
        });        
    }
    req.empleado = payload;
    next();
}