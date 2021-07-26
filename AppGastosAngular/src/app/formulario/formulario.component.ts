import { Component, OnInit } from '@angular/core';
import { Listado } from '../listado.model';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tituloForm= "Gestión de Gastos";

  importe = 0;
  descripcion = "";
  habilitar = false;
  
  //output guardar en la variable el objeto de tipo listado para ser enviada hacia el componente padre, 
  //eventEmitter creara un evento con esa variable 
  //el evento sera un objeto de tipo Listado(objeto) que tendra importe y descripcion
  // @Output() itemCreado = new EventEmitter<Listado>();

  addImporte(event: Event){
    this.importe = parseInt((<HTMLInputElement>event.target).value);
  }
  addDescripcion(event: Event){
    this.descripcion = (<HTMLInputElement>event.target).value;
  }

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  addItem(){
    let item = new Listado(this.importe, this.descripcion);
    //con emit se emitira el evento y se guardara en itemCreado el item que contine el objeto de tipo Listado
    // this.itemCreado.emit(item);
    this.registroService.itemAgregado(item);
    }
}
