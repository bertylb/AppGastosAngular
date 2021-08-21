import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemListado } from '../model/item-listado.model';

@Injectable()
export class ListadoService {
  private listado: ItemListado[] = [];
  // BehaviorSubject es un observable, con la caracteristica que conserva el ultimo valor emitido
  listadoSubject = new BehaviorSubject<ItemListado[]>(this.listado);

  constructor() {
    this.listado = [
      new ItemListado(500, 'Masitas'),
      new ItemListado(300, 'Gaseosas')
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

  eliminar(item: ItemListado){
    const indice: number = this.listado.indexOf(item);
    this.listado.splice(indice,1);
  }
}
