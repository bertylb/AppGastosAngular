import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit, OnChanges {
  saldoActual: number = 5000;
  saldoIngresado: number = 5000;
  // la variable saldoActual viene como parámetro (Input) desde el componente padre
  @Input() gastoActual: number = 0;
  gasto: number = 0;

  constructor(private listadoService: ListadoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    console.log("gasto actual", this.gastoActual);
    this.gasto = this.gastoActual;
    
  }
  
  ngOnInit(): void {
    console.log(this.showGasto());
  }
  
  showGasto(){
    console.log("gasto", this.gasto);
    return this.gasto;
  }

}
