import { Component, OnInit} from '@angular/core';
import { Listado } from '../listado.model';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  gastoActual: number = 5000;
  saldoIngresado:number = 5000;
  
  listado: Listado[] = [];
  saldoActual = 0; 

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.listado = this.registroService.listadoRegistro;

    this.listado.forEach((lista)=> {
      this.saldoActual += lista.importe;
      console.log(this.saldoActual);
    });
  }

}

  
