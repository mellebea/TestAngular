import { EmpleadosService } from './../../services/empleados.service';

import { Empleado } from './../../interfaces/empleados.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  
  public empleados : Empleado[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'tallePredeterminado'];  // Definir las columnas visibles


  constructor (private empleadosService: EmpleadosService){}

  ngOnInit(): void {
    this.empleadosService.getEmpleados()
    .subscribe(empleados=>this.empleados=empleados);
  }

}
