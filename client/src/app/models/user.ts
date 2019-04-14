export class User{
    constructor(
        public usuId: string,
        public identificacion: string,
        public nombre: string,
        public apellido:  string,
        public direcccion: string,
        public telefono: string,
        public correo: string,
        public contrasena: string,
        public idrole: string,
        public idarea: string,
        public idtarjeta: string
    ){}
}