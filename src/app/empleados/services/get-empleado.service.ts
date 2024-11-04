import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleados.interface';

@Injectable({providedIn: 'root'})
export class GetEmpleado {
  
  constructor(private http: HttpClient) { }

  private empleadoSeleccionado: Empleado | null = null;

  setEmpleado(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
  }

  getEmpleado(): Empleado | null {
    return this.empleadoSeleccionado;
  }
  
}