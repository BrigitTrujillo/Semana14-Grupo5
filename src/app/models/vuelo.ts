export class Vuelo {

    _id?: string;
    numero: string;
    origen: string;
    destino: string;
    fecha: string;

    constructor(numero:string, origen:string, destino: string, fecha: string){
        this.numero = numero;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
    }

}