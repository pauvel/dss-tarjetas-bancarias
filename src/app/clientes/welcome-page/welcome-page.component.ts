import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientsListResponse } from 'src/app/interfaces/clientListResponse.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public clientesActuales: ClientsListResponse[] = [];
  public clienteSeleccionado: ClientsListResponse | null;

  @ViewChild('curpForm') inputCurp: HTMLInputElement;
  @ViewChild('nombreForm') inputNombre: HTMLInputElement;
  @ViewChild('domicilioForm') inputDomicilio: HTMLInputElement;
  @ViewChild('hijosForm') inputHijos: HTMLInputElement;
  @ViewChild('ingresoForm') inputIngreso: HTMLInputElement;
  @ViewChild('estadoCivilForm') inputCivil: HTMLInputElement;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.ObtenerClientes()
                    .subscribe(clientes => {
                      this.clientesActuales = clientes;
                    });
  }

  changeOption(value:number):void{
    if(value == 0){
      return;
    }
    const cliente = this.clientesActuales.find( cl => cl.id == value );
    this.inputCurp.value = cliente.curp;
    this.inputNombre.value = cliente.nombreCompleto;
    this.inputDomicilio.value = cliente.domicilio;
    this.inputHijos.value = cliente.hijos.toString();
    this.inputIngreso.value = cliente.ingresosMensuales.toString();
    this.inputCivil.value = cliente.idEstadoCivilNavigation.tipo || 'Sin identificar';
    console.log(`Curp seleccionada ${this.inputCurp.value}`);
  }

}
