import { Component, OnInit } from '@angular/core';
import { Listado } from './listado.model';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Gestión de Gastos';

  listado : Listado[] = [];

  constructor(private registroService: RegistroService){}
  
  ngOnInit(): void {
    this.listado = this.registroService.listadoRegistro;
  }

  // itemAgregado(itemListado: Listado){
  //   // this.listado.push(itemListado);
  //   this.registroService.itemAgregado(itemListado);
  // }
}
