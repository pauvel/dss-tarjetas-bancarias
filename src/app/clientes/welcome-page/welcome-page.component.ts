import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsListResponse } from 'src/app/interfaces/clientListResponse.interface';
import { ClientResponse } from 'src/app/interfaces/clientResponse.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public clientesActuales: ClientsListResponse[] = [];
  public clienteSeleccionado: ClientsListResponse | null = null;
  public isNewClicked: boolean = false;

  @ViewChild('curpForm') inputCurp: HTMLInputElement;
  @ViewChild('nombreForm') inputNombre: HTMLInputElement;
  @ViewChild('domicilioForm') inputDomicilio: HTMLInputElement;
  @ViewChild('hijosForm') inputHijos: HTMLInputElement;
  @ViewChild('ingresoForm') inputIngreso: HTMLInputElement;
  @ViewChild('estadoCivilForm') inputCivil: HTMLInputElement;

  constructor(private apiService:ApiService,
              private router:Router,
              private renderer:Renderer2) { }

  ngOnInit(): void {
    this.apiService.ObtenerClientes()
                    .subscribe(clientes => {
                      this.clientesActuales = clientes;
                    });
  }

  changeOption(value:number):void{
    if(this.isNewClicked){
      this.isNewClicked = false;
      this.ManageInputs(false);
    }
    if(value == 0){
      this.clienteSeleccionado = null;
      return;
    }
    const cliente = this.clientesActuales.find( cl => cl.id == value );
    if(!cliente){
      alert("Seleccione un cliente por favor.");
      return;
    }
    this.inputCurp.value = cliente.curp;
    this.inputNombre.value = cliente.nombreCompleto;
    this.inputDomicilio.value = cliente.domicilio;
    this.inputHijos.value = cliente.hijos.toString();
    this.inputIngreso.value = cliente.ingresosMensuales.toString();
    this.inputCivil.value = cliente.idEstadoCivilNavigation.tipo || 'Sin identificar';
    this.clienteSeleccionado = cliente;
    console.log(`Curp seleccionada ${this.inputCurp.value}`);
  }

  CalcularTarjeta():void{
    // TODO: VALIDATE LENGHT OF INPUTS.
    if(this.isNewClicked){
      let errorTitles = [];
      let isCivilCorrect:boolean = false;
      const clienteBuilded: ClientResponse = <ClientResponse>{};
      // Si esta creando un nuevo cliente.
      const labels = document.querySelectorAll('label');
      labels.forEach((e, i, arr) => {
        if(i != 0){
          const input = <HTMLInputElement>e.firstElementChild;
          if(input.value.length == 0){
            errorTitles.push(e.innerText);
          }
          if(i == 1){
            clienteBuilded.curp = input.value.trim().toUpperCase();
          }
          if(i == 2){
            clienteBuilded.nombreCompleto = input.value.toUpperCase();
          }
          if(i == 3){
            clienteBuilded.domicilio = input.value.toUpperCase();
          }
          if(i == 4){
            isCivilCorrect = input.value != 'soltero' && input.value != 'casado' ? false : true;
            clienteBuilded.idEstadoCivil = input.value == 'CASADO' ? 1 : 2;
          }
          if(i == 5){
            clienteBuilded.edad = parseInt(input.value);
          }
          if(i == 6){
            clienteBuilded.ingresosMensuales = parseFloat(input.value);
          }
        }
      });

      if(errorTitles.length > 0){
        alert(`Complete los campos:\n ${errorTitles.join('\n')}`);
        return;
      }
      if(!isCivilCorrect){
        alert('Revise el estado civil, solo se permiten las palabras:\n"SOLTERO"\n"CASADO".');
        return;
      }

      // Registrar cliente.
      this.apiService.CrearNuevocliente(clienteBuilded).subscribe(cl => {
        console.log(cl);
        this.router.navigate([`cliente/${cl.id}/nueva-solicitud`]);
      }, err =>{
        alert(`ERROR\n${err.error.msg}`);
      });
    }else{
      if(this.clienteSeleccionado == null){
        alert('Seleccione un cliente');
        return;
      }
      this.router.navigate([`cliente/${this.clienteSeleccionado.id}/nueva-solicitud`]);
    }
  }

  ManageInputs(isNewClicked:boolean):NodeListOf<HTMLInputElement>{
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
      if(isNewClicked){
        element.disabled = false;
        element.classList.add('editable-input');
        element.value = '';
      }else{
        element.disabled = true;
        if(element.classList.contains('editable-input')){
          element.classList.remove('editable-input');
        }
      }
    });
    return inputs;
  }

  NuevoCliente():void{
    this.clienteSeleccionado = null;
    this.isNewClicked = true;
    const inputs = this.ManageInputs(true);
    inputs[0].focus();
  }

}
