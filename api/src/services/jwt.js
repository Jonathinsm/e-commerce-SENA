'use strict'

const jwt = require('jwt-simple');
const momment = require('moment');
const secret = 'I_am_the_shield_that_proctect_the_realm_of_men';

exports.createToken = function(empleado){
    const payload = {
        sub: empleado.id_empleado,
        document: empleado.ced_emp,
        name: empleado.nombre_emp,
        user: empleado.usuario,
        pass: empleado.contrasena,
        area: empleado.idarea,
        role: empleado.idrole,
        iat: momment().unix(),
        exp: momment().add(24,'hours').unix

    };

    return jwt.encode(payload, secret);
};