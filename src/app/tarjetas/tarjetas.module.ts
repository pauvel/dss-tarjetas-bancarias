import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaSolicitudPageComponent } from './nueva-solicitud-page/nueva-solicitud-page.component';
import { PruebaEjecucionComponent } from './prueba-ejecucion/prueba-ejecucion.component';



@NgModule({
  declarations: [
    NuevaSolicitudPageComponent,
    PruebaEjecucionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NuevaSolicitudPageComponent,
    PruebaEjecucionComponent
  ]
})
export class TarjetasModule { }
