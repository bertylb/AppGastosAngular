import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit, OnChanges{

  claseSaldo: boolean = true;
  porcentaje: number = 0;
  saldoIngresado: number = 5000;
  saldoActual: number = 0;
  // la variable saldoActual viene como parámetro (Input) desde el componente padre
  @Input() gastoActual:number=0;

  @Input() subjet!: Subject<number>; // ! indica que la variable no puede ser nula(?)

  constructor(){
  }

  ngOnChanges(){
    this.saldoActual = 5000;
    this.saldoActual -= this.gastoActual;
    this.updateSaldo();

    this.porcentaje = this.saldoActual/this.saldoIngresado;

    if( this.porcentaje < 0.15){
      this.claseSaldo = false;
    }else{
      this.claseSaldo = true;
    }
  }

  ngOnInit(): void {
  }

  updateSaldo(){
    this.subjet.next(this.saldoActual);
  }

}