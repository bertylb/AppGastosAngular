import { BehaviorSubject } from 'rxjs';
import { ItemListado } from '../model/item-listado.model';

export class ListadoService {
  private listado: ItemListado[] = [];
  // BehaviorSubject es un observable, con la caracteristica que conserva el ultimo valor emitido
  listadoSubject = new BehaviorSubject<ItemListado[]>(this.listado);

  constructor() {
    this.listado = [
      new ItemListado(500, 'Masitas'),
      new ItemListado(300, 'Gaseosas'),
      new ItemListado(50, 'Helados'),
    ];
    // se "emite" el observable, haya o no alguien "escuchando"
    this.listadoSubject.next(this.listado);
  }

  getListado() {
    return this.listado;
  }

  addListadoItem(item: ItemListado) {
    this.listado.push(item);
    this.listadoSubject.next(this.listado);
  }

  getListadoSubject() {
    return this.listadoSubject;
  }
}
