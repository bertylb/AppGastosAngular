import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemListado } from '../model/item-listado.model';
import { ListadoService } from '../services/listado.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tituloForm = 'Gestión de Gastos';
  importe: number = 0;
  descripcion: string = '';
  // habilitar: boolean = false;
  saldoActual: number = 0;

  @Input() subjet!: Subject<number>; // ! indica que la variable no puede ser nula(?)

  formulario: FormGroup;

  reGexImporte = /^(1-9)?[0-9]{1,20}$/;
  reGexDescripcion = /^[ a-zA-Z ]{1,20}$/;

  constructor(
    private listadoService: ListadoService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      importe: ['',[Validators.required, Validators.pattern(this.reGexImporte)]],
      descripcion: ['', [Validators.required, Validators.pattern(this.reGexDescripcion)]]
    });
  }

  ngOnInit(): void {
    this.subjet.subscribe((saldoActual: number) => {
      this.saldoActual = saldoActual;
    });
  }

  addItem() {
    if (this.formulario.invalid) {
      this.toastr.warning(
        'Los campos no deben estar vacios y debe completarlos correctamente',
        'OPERACIÓN DENEGADA'
      );
    } else if (this.saldoActual <= 0 || this.saldoActual < this.formulario.value.importe) {
        this.toastr.error(
          'No posee saldo suficente para realizar la operación!',
          'OPERACIÓN DENEGADA',
          {
            timeOut: 1400,
          }
        );
      } else {
        const currentDate = new Date();
        const item = new ItemListado(this.formulario.value.importe, this.formulario.value.descripcion,currentDate);
        this.listadoService.addListadoItem(item);
        this.toastr.success(
          'La operación fue realizada con exito',
          'OPERACIÓN EXITOSA!',
          {
            timeOut: 1400,
          }
        );
        this.resetForm();
      }
    }

  resetForm() {
    this.formulario.setValue({
      importe:'',
      descripcion: ''
    });
  }
}
