import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { ToastrService } from 'ngx-toastr';
import { GetEmpleado } from '../../services/get-empleado.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent implements OnInit{

  empleado:Empleado={
    id:                  0,
    nombre:              '',
    apellido:            '',
    email:               '',
    tallePredeterminado: ''
  };

  public empleadoSeleccionado: Empleado | null = null;

  constructor(private serviceEmpleado:EmpleadosService,private toastr: ToastrService,
    private getEmpleado:GetEmpleado){}

  ngOnInit():void{
    

      this.EmpleadoSeleccionado();


  }

  guardarEmpleado() {
    if (this.empleadoSeleccionado) {
      this.actualizarEmpleado();
    } else {
      this.nuevoEmpleado();
    }
  }

  EmpleadoSeleccionado(){
    console.log('empleado de tabla a actualizar',this.empleadoSeleccionado)

    this.empleadoSeleccionado = this.getEmpleado.getEmpleado();
    if (this.empleadoSeleccionado) {
      this.empleado= {...this.empleadoSeleccionado};
      console.log('Empleado seleccionado recibido:', this.empleadoSeleccionado);
    } 
    else {
      console.log('No se recibió ningún empleado seleccionado.');
    }
  }

  nuevoEmpleado(){
    console.log('Empleado guardado', this.empleado);

    this.serviceEmpleado.postEmpleado(this.empleado).subscribe({
      next: (respuesta) => {
        console.log('Empleado guardado exitosamente:', respuesta);
        this.toastr.success('Empleado guardado exitosamente.','Exito');
        this.resetFormulario();
      },
      error: (error) => {
        console.error(' XXXXXXXXXXXError al guardar el empleado:', error);
      }
    })
  }

  actualizarEmpleado() {
    this.serviceEmpleado.putEmpleado(this.empleado.id, this.empleado).subscribe(
      response => {
        console.log('Empleado actualizado con éxito:', response.message);
        this.toastr.success('Empleado actualizado exitosamente.','Exito');
        this.resetFormulario();
      },
      error => {
        console.error('Error al actualizar el empleado:', error);
      }
    );
  }

  resetFormulario() {
    this.empleado = {
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      tallePredeterminado: ''
    };
    this.empleadoSeleccionado = null;
  }

}
