import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module';
import { HttpClientModule } from '@angular/common/http';
import { TarjetasModule } from './tarjetas/tarjetas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    HttpClientModule,
    TarjetasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
