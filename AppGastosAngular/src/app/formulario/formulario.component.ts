import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemListado } from '../model/item-listado.model';
import { ListadoService } from '../services/listado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  tituloForm = 'Gestión de Gastos';
  importe:number = 0;
  descripcion:string = '';
  habilitar: boolean = false;
  saldoActual: number = 0;

  @Input() subjet!: Subject<number>; // ! indica que la variable no puede ser nula(?)

  constructor(private listadoService: ListadoService,
                private toastr: ToastrService) {}

  ngOnInit(): void {
    this.subjet.subscribe((saldoActual: number) => {
      this.saldoActual = saldoActual;
    });
  }

  addItem() {
    if(this.saldoActual <= 0 || this.saldoActual < this.importe){
      alert("NO POSEE SALDO SUFICIENTE PARA REALIZAR LA OPERACION!");
    } else {
      const currentDate = new Date();
      const item = new ItemListado(this.importe, this.descripcion, currentDate);
      this.listadoService.addListadoItem(item);
      this.resetForm();
      this.toastr.success('El item fue agregado con exito', '¡ITEM AGREGADO!');
    }
  }

  resetForm() {
    this.importe = 0;
    this.descripcion = '';
  }

}
