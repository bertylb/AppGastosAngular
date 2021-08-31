import { Component, OnInit } from '@angular/core';
import { ItemListado } from '../model/item-listado.model';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tituloForm = 'Gestión de Gastos';
  importe:number = 0;
  descripcion:string = '';

  resetForm() {
    this.importe = 0;
    this.descripcion = '';
  }

  constructor(private listadoService: ListadoService) {}

  ngOnInit(): void {}

  addItem() {
    const item = new ItemListado(this.importe, this.descripcion);
    this.listadoService.addListadoItem(item);
    this.resetForm();
  }
}
