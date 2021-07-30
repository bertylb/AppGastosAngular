import { Component, Input, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent implements OnInit {
  saldoActual: number = 5000;
  saldoIngresado: number = 5000;
  // la variable saldoActual viene como parámetro (Input) desde el componente padre
  @Input() gastoActual = 0;

  constructor(private listadoService: ListadoService) {}

  ngOnInit(): void {}
}
