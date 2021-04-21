import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './clientes/welcome-page/welcome-page.component';
import { NuevaSolicitudPageComponent } from './tarjetas/nueva-solicitud-page/nueva-solicitud-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'cliente/:cliente/nueva-solicitud', component: NuevaSolicitudPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
