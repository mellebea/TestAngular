import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent {

  public empleado:Empleado={
      id:0 ,               
      nombre:'',        
      apellido:'',      
      email:'',           
      tallePredeterminado:'0'
  
  }

  guardarEmpleado() {
    console.log('Empleado guardado', this.empleado);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  }
}
