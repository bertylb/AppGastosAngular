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
      // new ItemListado(500, 'Masitas'),
      // new ItemListado(300, 'Gaseosas')
    ];
    // se "emite" el observable, haya o no alguien "escuchando"
    this.getListado();
    this.listadoSubject.next(this.listado);
  }

  getListado() {
    // return this.listado;
    if(localStorage.getItem('items') === null){
      return this.listado;
    } else {
      this.listado = JSON.parse(localStorage.getItem('items') || '[]');
      return this.listado;
    }
  }

  addListadoItem(item: ItemListado) {
    let items: ItemListado[] = [];
    if(localStorage.getItem('items') === null){
      items.unshift(item);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem('items') || '[]');
      items.unshift(item);
      localStorage.setItem('items', JSON.stringify(items));
    }
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
