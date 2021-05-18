import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './clientes/welcome-page/welcome-page.component';
import { NuevaSolicitudPageComponent } from './tarjetas/nueva-solicitud-page/nueva-solicitud-page.component';
import { PruebaEjecucionComponent } from './tarjetas/prueba-ejecucion/prueba-ejecucion.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'cliente/:cliente/nueva-solicitud', component: NuevaSolicitudPageComponent},
  { path: 'cliente/:cliente/ejecutar/tarjeta/:tarjeta', component: PruebaEjecucionComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
