export class Vuelo {

    _id?: string;
    num_vuelo: string;
    origen: string;
    destino: string;
    fecha: string;

    constructor(num_vuelo:string, origen:string, destino: string, fecha: string){
        this.num_vuelo = num_vuelo;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
    }

}