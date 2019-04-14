--Crear tablas y relaciones--

create database dbalpha;

use dbalpha;


create table categorias(
catId int auto_increment primary key,
catNombre varchar(50) not null
);

create table presentaciones(
preId int auto_increment primary key,
preNombre varchar(50) not null
);

create table proveedores(
proId int auto_increment primary key,
proNit varchar(50) not null,
proNombre varchar(50) not null,
proDireccion varchar(50) not null,
proTelefono varchar(50) not null,
proContacto varchar(50) not null
);

create table roles(
rolId int auto_increment primary key,
rolNombre varchar(50) not null
);

create table areas(
areId int auto_increment primary key,
areNombre varchar(50) not null
);

create table usuarios(
usuId int auto_increment primary key,
usuIdentificacion varchar(50) not null,
usuNombre varchar(30) not null,
usuApellido varchar (30) not null,
usuDireccion varchar(50),
usuTelefono varchar(50),
usuCorreo varchar(50),
usuContrasena varchar(120),
usuIdRole int not null,
usuIdArea int,
usuIdTarjeta int
);

create table tarjetas(
tarId varchar(50) primary key,
tarFechaVenc date not null,
tarTipo int not null
);

create table tipostarjetas(
tipId int auto_increment primary key,
tipNombre varchar(50)
);

create table metodospago(
metpId int auto_increment primary key,
metpNombre varchar(50) not null
);

create table unidades(
uniId int auto_increment primary key,
uniNombre varchar(20) not null
);

CREATE TABLE detalleinventarios(
detId int auto_increment primary key,
detNombre varchar(50) not null
);

create table marcas(
marId int auto_increment primary key,
marNombre varchar(50) not null,
marIdProv int not null
);

create table productos(
prodId int auto_increment primary key,
prodNombre varchar(50) not null,
prodDescripcion varchar(255) not null,
prodPrecio float not null,
prodFechaCreacion datetime default now(),
prodIdUnidad int not null,
prodIdCategoria int not null,
prodIdPresentacion int not null,
prodIdMarca int not null,
prodIdUsuario int not null
 );

create table ventas(
ventId int auto_increment primary key,
ventFecha datetime default now(),
venSubTotal float not null,
venIva float not null,
venTotal float not null,
venIdCliente int not null,
venIDEmpleado int not null
 );

create table detalleventas(
detvenIdVenta int not null,
detvenIdProducto int not null,
detvenCantidad int not null
);

CREATE TABLE compras(
comId varchar(10) primary key,
comFecha datetime default now(),
comTotal float not null,
comIdProveedor int not null,
comIdUsuario int not null
);

CREATE TABLE detallecompras(
detcomIdProducto int not null,
detcomIdCompra int not null,
detcomCantidad int not null,
detcomPrecio int not null
);

CREATE TABLE inventarios(
invId int auto_increment primary key,
invFecha datetime default now(),
invCantidadEntradas int,
invCantidadSalidas int,
invCantidadActual int,
invCantidadMaxima int,
invCantidadMinima int,
invIdProducto int not null,
invIdDetalle int not null
);

CREATE TABLE productos_actualizados(
id_prod_act int auto_increment primary key,
f_modif datetime default now(),
idproducto int,
anterior_precio int,
anterior_nombre varchar(50),
anterior_descripcion varchar(255),
anterior_idunidad int,
anterior_idcategoria int,
anterior_idpresentacion int,
anterior_idmarca int,
actual_precio int,
actual_nombre varchar(50),
actual_descripcion varchar(255),
actual_idunidad int,
actual_idcategoria int,
actual_idpresentacion int,
actual_idmarca int,
idempleado int
);

--Insertar datos--

INSERT INTO areas (`areNombre`) VALUES ('Compras');
INSERT INTO areas (`areNombre`) VALUES ('Ventas');
INSERT INTO areas (`areNombre`) VALUES ('Bodega');
INSERT INTO areas (`areNombre`) VALUES ('Tecnologia');
INSERT INTO areas (`areNombre`) VALUES ('Administración');
INSERT INTO areas (`areNombre`) VALUES ('Contabilidad');
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Coca-cola	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Aguila Roja	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Algarra	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Alpina	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Alqueria	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Argos	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Arroz Diana	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Arroz el ruedo	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Arroz Florhuila	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Arroz SOS	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Casa Luker	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Chocolistto	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Chocolyne	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Club Colombia	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Cola & Pola	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Colanta	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Colcafe	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Colombina	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Corona	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Costeña	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Cristal	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Danone	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Darla	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Diana	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	El bucanero	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	El Rey	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Familia	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Finesse	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Fruco	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	General Mills	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Gourmet	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Hit	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Jet	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Johnson y Jhonson	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Kellogs	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Leonisa	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Levapan	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Manuelita	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Margarita	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Mars	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Mondelez	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Mr Tea	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Nestle	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Noel	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Nutresa	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	P&G	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Pepsico	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Pietran	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Pilsen	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Pony Malta	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Postobon	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Postobon	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Rica Rondo	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Rnachera	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Roa	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Saltin Noel	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Sello Rojo	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Unilever	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Winny	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Yupi	',1);
INSERT INTO marcas (`marNombre`,`marIdProv`) VALUES ('	Zenú	',1);
INSERT INTO categorias (`catNombre`) VALUES ('Alimentos');
INSERT INTO categorias (`catNombre`) VALUES ('Cigarrillos');
INSERT INTO categorias (`catNombre`) VALUES ('Electrodomesticos');
INSERT INTO categorias (`catNombre`) VALUES ('Medicamentos');
INSERT INTO categorias (`catNombre`) VALUES ('Productos de aseo');
INSERT INTO categorias (`catNombre`) VALUES ('Productos de higiene personal');
INSERT INTO categorias (`catNombre`) VALUES ('Productos para animales');
INSERT INTO categorias (`catNombre`) VALUES ('Productos para niños');
INSERT INTO categorias (`catNombre`) VALUES ('Articulos para el hogar');
INSERT INTO presentaciones (`preNombre`) VALUES ('Bolsa');
INSERT INTO presentaciones (`preNombre`) VALUES ('Botella');
INSERT INTO presentaciones (`preNombre`) VALUES ('Embase');
INSERT INTO presentaciones (`preNombre`) VALUES ('Caja');
INSERT INTO presentaciones (`preNombre`) VALUES ('Barra');
INSERT INTO presentaciones (`preNombre`) VALUES ('Capsulas');
INSERT INTO proveedores (`proNit`, `proNombre`, `proDireccion`, `proTelefono`, `proContacto`) VALUES ('236464', 'Koba', 'auto norte', '4646364', 'Juan Torres');
INSERT INTO roles (`rolNombre`) VALUES ('usuario');
INSERT INTO roles (`rolNombre`) VALUES ('empleado');
INSERT INTO roles (`rolNombre`) VALUES ('admin');
INSERT INTO metodospago (`metpNombre`) VALUES ('Efectivo');
INSERT INTO metodospago (`metpNombre`) VALUES ('Debito');
INSERT INTO metodospago (`metpNombre`) VALUES ('Credito');
INSERT INTO unidades (`uniNombre`) VALUES ('gr');
INSERT INTO unidades (`uniNombre`) VALUES ('lb');
INSERT INTO unidades (`uniNombre`) VALUES ('kg');
INSERT INTO unidades (`uniNombre`) VALUES ('ml');
INSERT INTO unidades (`uniNombre`) VALUES ('Litro');
INSERT INTO unidades (`uniNombre`) VALUES ('unidad');
INSERT INTO unidades (`uniNombre`) VALUES ('rollo');
INSERT INTO unidades (`uniNombre`) VALUES ('hoja');
INSERT INTO unidades (`uniNombre`) VALUES ('paquete');
INSERT INTO detalleinventarios (`detNombre`) VALUES ('Inventario Inicial');
INSERT INTO detalleinventarios (`detNombre`) VALUES ('Compra');
INSERT INTO detalleinventarios (`detNombre`) VALUES ('Venta');
INSERT INTO detalleinventarios (`detNombre`) VALUES ('Devlución');

--Procedimientos--

CREATE PROCEDURE EditarOAgregarUsuario(
    IN _id INT,
    IN _identificacion varchar(50),
    IN _nombre varchar(50),
    IN _apellido varchar(50),
    IN _direccion varchar(50),
    IN _telefono varchar(50),
    IN _correo varchar(50),
    IN _contrasena varchar(200),
    IN _idrole int,
    IN _idarea int,
    IN _idtarjeta int

)
BEGIN
    IF _id = 0 THEN
        INSERT INTO usuarios (usuIdentificacion,usuNombre,usuApellido,usuDireccion,usuTelefono,usuCorreo,usuContrasena,usuIdRole,usuIdArea,usuIdTarjeta)
        VALUES (_identificacion,_nombre,_apellido,_direccion,_telefono,_correo,_contrasena,_idrole,_idarea,_idtarjeta);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE usuarios
        SET
            usuIdentificacion = _identificacion,
            usuNombre = _nombre,
            usuApellido = _apellido,
            usuDireccion = _direccion,
            usuTelefono = _telefono,
            usuCorreo = _correo
            WHERE usuId = _id;
    END IF;

    SELECT _id AS usuId;
END

CREATE PROCEDURE EditarOAgregarProveedor (
    IN _id INT,
    IN _nit varchar(50),
    IN _name varchar(50),
    IN _dir varchar(50),
    IN _tel varchar(50),
    IN _cont varchar(50)
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO proveedores (nit_prov,nombre_prov,direccion_prov,telefono_prov,nombre_contacto)
        VALUES (_nit,_name,_dir,_tel,_cont);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE proveedores
        SET
            nit_prov = _nit,
            nombre_prov = _name,
            direccion_prov = _dir,
            telefono_prov = _tel,
            nombre_contacto = _cont
            WHERE id_proveedor = _id;
    END IF;

    SELECT _id AS id_proveedor;
END

CREATE PROCEDURE EditarOAgregarCliente (
    IN _id INT,
    IN _ced varchar(50),
    IN _name varchar(50),
    IN _dir varchar(50),
    IN _tel varchar(50)
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO clientes (cedula_cli,nombre_cli,direccion_cli,telefono_cli)
        VALUES (_ced,_name,_dir,_tel);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE clientes
        SET
            cedula_cli = _ced,
            nombre_cli = _name,
            direccion_cli = _dir,
            telefono_cli = _tel
            WHERE id_cliente = _id;
    END IF;

    SELECT _id AS id_cliente;
END

CREATE PROCEDURE EditarOAgregarProducto (
    IN _id INT,
    IN _nombre varchar(50),
    IN _descripcion varchar(255),
    IN _precio INT,
    IN _idunidad INT,
    IN _idcategoria INT,
    IN _idpresentacion INT,
    IN _idmarca INT,
    IN _idusuario INT
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO productos (prodNombre,prodDescripcion,prodPrecio,prodIdUnidad,prodIdCategoria,prodIdPresentacion,prodIdMarca,prodIdUsuario)
        VALUES (_nombre,_descripcion,_precio,_idunidad,_idcategoria,_idpresentacion,_idmarca,_idusuario);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE productos
        SET
            prodNombre = _nombre,
            prodDescripcion = _descripcion,
            prodPrecio = _precio,
            prodIdUnidad = _idunidad,
            prodIdCategoria = _idcategoria,
            prodIdPresentacion = _idpresentacion,
            prodIdMarca =  _idmarca,
            prodIdUsuario = _idusuario
            WHERE prodId = _id;
    END IF;

    SELECT _id AS prodId;
END


--Triggers--

CREATE TRIGGER entradas_p1_ai AFTER INSERT ON compras
FOR EACH ROW
INSERT INTO inventario (idproducto,iddetalle,valor_unitario,entradas_cantidad,entradas_valores)
VALUES (new.idproducto,2,new.valor_unitario,new.cantidad,new.valor_unitario*new.cantidad);

CREATE TRIGGER entradas_p2_ai AFTER INSERT ON compras
FOR EACH ROW
UPDATE producto
SET cantidad_actual = cantidad_actual + new.cantidad
WHERE id_producto = new.idproducto;

CREATE TRIGGER audita_productos_bu BEFORE UPDATE ON productos
FOR EACH ROW
INSERT INTO productos_actualizados (idproducto,anterior_precio,anterior_iva,anterior_cantidad,actual_precio,actual_iva,actual_cantidad,usuario)
VALUES (old.id_producto,old.precio_prod,old.iva_prod,old.cantidad_actual,new.precio_prod,new.iva_prod,new.cantidad_actual,CURRENT_USER());

--SQL--

SELECT P.prodId,P.prodNombre,P.prodDescripcion,P.prodPrecio,P.prodFechaCreacion,U.uniNombre,C.catNombre,PR.preNombre,M.marNombre,US.usuNombre,US.usuApellido,PO.proNombre FROM productos P
INNER JOIN unidades U ON P.prodIdUnidad=U.uniId
INNER JOIN categorias C ON P.prodIdCategoria=C.catId
INNER JOIN presentaciones PR ON P.prodIdPresentacion=PR.preId
INNER JOIN marcas M ON P.prodIdMarca=M.marId
INNER JOIN usuarios US ON P.prodIdUsuario=US.usuId
INNER JOIN proveedores PO ON M.marIdProv=PO.proId
WHERE proId= ?;