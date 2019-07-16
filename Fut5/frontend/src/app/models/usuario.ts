export class Usuario {

    constructor(_id ='', nombre ='', apellido='', edad = 0, experiencia
    ='', pie = '', provincia='', canton=''){
        this._id=_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.experiencia=experiencia;
        this.pie=pie;
        this.provincia=provincia;
        this.canton=canton;


    }

    _id: string;
    nombre: string;
    apellido: string;
    edad: number;
    experiencia: string;
    pie: string;
    provincia: string;
    canton: string;
}
