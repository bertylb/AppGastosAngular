import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit, OnChanges{


  saldoIngresado: number = 5000;
  saldoActual: number = 5000;
  // la variable saldoActual viene como parámetro (Input) desde el componente padre
  @Input() gastoActual:number=0;

  constructor(){
  }

  ngOnChanges(){
    this.saldoActual = 5000;
    this.saldoActual -= this.gastoActual;
  }
  
  ngOnInit(): void {
  }

}