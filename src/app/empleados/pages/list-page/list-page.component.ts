import { EmpleadosService } from './../../services/empleados.service';

import { Empleado } from './../../interfaces/empleados.interface';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  
  public empleados : Empleado[]=[];
  public empleadoSeleccionado: Empleado | null = null;
  
  metaKey: boolean = true;


  constructor (private empleadosService: EmpleadosService,private messageService: MessageService,private router: Router){}

  selectedEmpleado(empleadoSeleccionado: Empleado) 
  {
    this.messageService.add({ severity: 'info', summary: 'Empleado Seleccionado', detail: empleadoSeleccionado.nombre });
    this.router.navigate(['empleados/pedidos'], { state: { empleadoSeleccionado: empleadoSeleccionado } });
    console.log(empleadoSeleccionado);
  }

  ngOnInit(): void {
    this.empleadosService.getEmpleados()
    .subscribe(empleados=>this.empleados=empleados);
  }

}
