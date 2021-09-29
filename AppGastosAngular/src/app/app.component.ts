import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ItemListado } from './model/item-listado.model';
import { ListadoService } from './services/listado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  subjet = new Subject<number>();

  titulo = 'Gestión de Gastos';

  listado: ItemListado[] = [];

  sumaImportes: number = 0;

  constructor(private listadoService: ListadoService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    //realizamos la suscripción a la lista que guarda el Service.
    // Cada vez que se emita un cambio en la misma (addItem, por ejemplo), este método se va a ejecutar
    this.listadoService.getListadoSubject().subscribe((listado) => {
      // se resetea el valor a 0 para sumar el total nuevamente
      this.listado = listado;
      this.sumaImportes = 0;
      listado.forEach((item) => {
        this.sumaImportes += item.importe;
      });
    });
  }

  eliminarItem(item: ItemListado){
    let confirmar = confirm("¿Está seguro que desea eliminar este item?");
    if(confirmar){
      this.listadoService.eliminar(item);
      this.sumaImportes -= item.importe;
      this.toastr.success('Item eliminado con exito','OPERACIÓN EXITOSA', {
        timeOut: 1300,
      });
    }
  }

}
