import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegistroService } from './registro.service';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
