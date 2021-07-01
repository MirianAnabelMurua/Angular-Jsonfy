import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AccionesComponent } from './acciones/acciones.component'; //Incluir


@NgModule({
  declarations: [FiltrosComponent, AccionesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FiltrosComponent]
})
export class ListadosModule { }
