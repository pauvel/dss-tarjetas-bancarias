import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsListResponse } from '../interfaces/clientListResponse.interface';
import { environment } from 'src/environments/environment';
import { ClientResponse } from '../interfaces/clientResponse.interface';
import { SolicitudResponse } from '../interfaces/solicitudResponse.interface';
import { ClientesModule } from '../clientes/clientes.module';
import { EjecucionResponse } from '../interfaces/ejecucionResponse.interface';
import { TarjetaResponse } from '../interfaces/tarjetaResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  ObtenerClientes(): Observable<ClientsListResponse[]>{
    return this.http.get<ClientsListResponse[]>(`${environment.apiUrl}/clientes`);
  }

  ObtenerClientePorId(id:number): Observable<ClientResponse>{
    return this.http.get<ClientResponse>(`${environment.apiUrl}/clientes/${id}`);
  }

  GenerarSolicitud(id:number): Observable<SolicitudResponse>{
    return this.http.post<SolicitudResponse>(`${environment.apiUrl}/clientes/${id}`, {});
  }

  CrearNuevocliente(cliente:ClientResponse): Observable<ClientResponse>{
    return this.http.post<ClientResponse>(`${environment.apiUrl}/clientes/nuevo`, cliente);
  }

  ObtenerTarjetaId(id:number): Observable<TarjetaResponse>{
    return this.http.get<TarjetaResponse>(`${environment.apiUrl}/tarjetas/${id}`);
  }

  EjecutarTarjeta(tarjetaId:number, meses:number, curp:string): Observable<EjecucionResponse>{
    return this.http.post<EjecucionResponse>(`${environment.apiUrl}/clientes/prueba/${curp}`, {
      TarjetaId: tarjetaId,
      Meses: meses
    });
  }
}