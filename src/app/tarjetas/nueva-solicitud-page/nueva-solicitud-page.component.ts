import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientResponse } from 'src/app/interfaces/clientResponse.interface';
import { SolicitudResponse } from 'src/app/interfaces/solicitudResponse.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nueva-solicitud-page',
  templateUrl: './nueva-solicitud-page.component.html',
  styleUrls: ['./nueva-solicitud-page.component.css']
})
export class NuevaSolicitudPageComponent implements OnInit {

  public solicitudGenerada: SolicitudResponse | null = null;
  public cliente: ClientResponse | null = null;

  constructor(private route: ActivatedRoute,
              private apiService:ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      // Se obtiene el parametro cliente
      this.apiService.ObtenerClientePorId(parametros.cliente).subscribe( clienteActual => {
        this.cliente = clienteActual;
        // Se obtiene la info desde la api
        this.apiService.GenerarSolicitud(clienteActual.id).subscribe( solicitud => {
          // Se obtiene la solicitud
          this.solicitudGenerada = solicitud;
        });
      });
    });
  }

  ejecutarPrueba(){
    if(this.cliente){
      this.router.navigate([`cliente/${this.cliente.id}/ejecutar/tarjeta/${this.solicitudGenerada.idTarjetaCreditoNavigation.id}`]);
    }else{
      alert('No hay cliente a ejecutar.');
    }
  }

}
