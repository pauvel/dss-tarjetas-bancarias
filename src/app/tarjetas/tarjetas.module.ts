import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaSolicitudPageComponent } from './nueva-solicitud-page/nueva-solicitud-page.component';



@NgModule({
  declarations: [
    NuevaSolicitudPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NuevaSolicitudPageComponent
  ]
})
export class TarjetasModule { }
