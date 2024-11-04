import { EmpleadosService } from './../../services/empleados.service';

import { Empleado } from './../../interfaces/empleados.interface';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { GetEmpleado } from '../../services/get-empleado.service';



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  
  public empleados : Empleado[]=[];
  public empleadoSeleccionado: Empleado | null = null;
  
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

}
