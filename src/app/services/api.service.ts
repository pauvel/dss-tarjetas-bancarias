import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsListResponse } from '../interfaces/clientListResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  ObtenerClientes(): Observable<ClientsListResponse[]>{
    return this.http.get<ClientsListResponse[]>(`${environment.apiUrl}/clientes`);
  }

}
