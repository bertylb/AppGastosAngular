import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemListado } from '../model/item-listado.model';

@Injectable()
export class ListadoService {
  private listado: ItemListado[] = [];
  // BehaviorSubject es un observable, con la caracteristica que conserva el ultimo valor emitido
  listadoSubject = new BehaviorSubject<ItemListado[]>(this.listado);

  constructor() {
    this.listado = [];
    // se "emite" el observable, haya o no alguien "escuchando"
    this.listadoSubject.next(this.getListado());
  }

  getListado() {
    if(localStorage.getItem('items') === null){
      return this.listado;
    } else {
      this.listado = JSON.parse(localStorage.getItem('items') || '[]');
      return this.listado;
    }
  }

  addListadoItem(item: ItemListado) {
    if(localStorage.getItem('items') === null){
      this.listado.unshift(item);
      localStorage.setItem('items', JSON.stringify(this.listado));
    } else {
      this.listado = JSON.parse(localStorage.getItem('items') || '[]');
      this.listado.unshift(item);
      localStorage.setItem('items', JSON.stringify(this.listado));
    }
    this.listadoSubject.next(this.listado);
  }

  getListadoSubject() {
    return this.listadoSubject;
  }

  eliminar(item: ItemListado){
    const indice: number = this.listado.indexOf(item);
    this.listado.splice(indice,1);
    localStorage.setItem('items', JSON.stringify(this.listado));
  }
}
