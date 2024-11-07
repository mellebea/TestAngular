import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent implements OnInit{

  empleado:Empleado={
    Id:                  0,
    Nombre:              '',
    Apellido:            '',
    Email:               '',
    TallePredeterminado: ''
  };

  constructor(private serviceEmpleado:EmpleadosService,private toastr: ToastrService,){}

  ngOnInit():void{
    
  }

  guardarEmpleado() {

    console.log('Empleado guardado', this.empleado);

    this.serviceEmpleado.postEmpleado(this.empleado).subscribe({
      next: (respuesta) => {
        console.log('Empleado guardado exitosamente:', respuesta);
        this.toastr.success('Empleado guardado exitosamente.','Exito');
      },
      error: (error) => {
        console.error('Error al guardar el empleado:', error);
      }
    })
    
    
  }


}
