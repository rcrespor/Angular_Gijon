
export interface User {
   nombre: string;
   apellidos: string;
   telefono: string;

}

export interface Impresora {
    codigo: string | number;
    nombre: string;
}

export interface Departamento {
    codigo: string | number;
    nombre: string;
}


export class Impresion {
    constructor(
        public usuario: User,
        public impresora: Impresora,
        public isColor: boolean,
        public isClaro: boolean,
        public departamento: Departamento) {}

}
