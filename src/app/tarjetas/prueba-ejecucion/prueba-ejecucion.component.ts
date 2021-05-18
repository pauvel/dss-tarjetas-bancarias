import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientResponse } from 'src/app/interfaces/clientResponse.interface';
import { EjecucionResponse } from 'src/app/interfaces/ejecucionResponse.interface';
import { TarjetaResponse } from 'src/app/interfaces/tarjetaResponse.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-prueba-ejecucion',
  templateUrl: './prueba-ejecucion.component.html',
  styleUrls: ['./prueba-ejecucion.component.css']
})
export class PruebaEjecucionComponent implements OnInit {

  public cliente:ClientResponse | null = null;
  public ejecucion:EjecucionResponse | null = null;
  public tarjeta:TarjetaResponse | null = null;

  constructor(
    private route:ActivatedRoute,
    private apiService:ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get params & do stuff.
      // params: cliente tarjeta
      this.apiService.ObtenerClientePorId(parseInt( params.cliente )).subscribe(cl => {
        console.log(cl)
        this.cliente = cl;
        this.apiService.ObtenerTarjetaId(parseInt( params.tarjeta )).subscribe(tar => {
          this.tarjeta = tar;
          console.log(tar)
        });
      });

    });
  }

  executeCard(meses:number){
    if(this.cliente && this.tarjeta){
      this.apiService.EjecutarTarjeta(this.tarjeta.id, meses, this.cliente.curp)
                      .subscribe(response => {
                        this.ejecucion = response;
                      }, err =>{
                        alert(`Ocurrio un error!\n${err.error.msg}`)
                      });
    }else{
      alert('Url invalida.');
    }
  }

}
