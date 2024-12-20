import { Component, OnInit } from '@angular/core';

import { Empleado } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { Route, Router } from '@angular/router';
import { GetEmpleado } from '../../services/get-empleado.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  
  public empleados : Empleado[]=[];
  
  empleado: Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    tallePredeterminado: ''
  };
  public empleadoSeleccionado: Empleado | null = null;
  public nombreFiltro: string = '';
  public apellidoFiltro: string = '';

  metaKey: boolean = true;


  constructor (private empleadosService: EmpleadosService, private getEmpleado:GetEmpleado,
               private router: Router){}

  

  ngOnInit(): void {
    this.empleadosService.getEmpleados()
    .subscribe(empleados=>this.empleados=empleados);
  }

  selectedEmpleado(empleado: Empleado) {
    this.getEmpleado.setEmpleado(empleado);
    this.router.navigateByUrl('empleados/pedidos');
    console.log(empleado);
  }

  filtrarEmpleados() {
    this.empleadosService.filtrarEmpleado(this.nombreFiltro, this.apellidoFiltro).subscribe(
      empleados => {
        this.empleados = empleados;
      },
      error => {
        console.error('Error al filtrar empleados:', error);
      }
    );
  }

  selectedEmpleadoActualizar(empleado: Empleado) {
    this.getEmpleado.setEmpleado(empleado);
    this.router.navigateByUrl('empleados/newEmpleado');
    console.log(empleado);
   
  }
  
  


}