import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoService } from './services/listado.service';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, TarjetasComponent],
  imports: [BrowserModule, FormsModule, CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [ListadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
