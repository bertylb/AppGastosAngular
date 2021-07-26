import { Listado } from "./listado.model";

export class RegistroService {
    listadoRegistro: Listado[] = [
        new Listado(500, 'Masitas'),
        new Listado(300, 'Gaseosas'),
        new Listado(50, 'Helados')
    ];
    
    itemAgregado(item: Listado){
        this.listadoRegistro.push(item);
    }
}