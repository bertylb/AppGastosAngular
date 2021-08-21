import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit{

  saldoActual: number = 5000;
  saldoIngresado: number = 5000;
  // la variable saldoActual viene como parámetro (Input) desde el componente padre
  @Input() gastoActual:number=0;

  constructor(){
    console.log(this.gastoActual);
  }
  
  ngOnInit(): void { 
  }
  
}

