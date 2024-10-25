import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleados.interface';




@Injectable({providedIn: 'root'})


export class EmpleadosService {

  private baseURL: string = 'https://localhost:44301/api/Empleado';

  constructor (private http:HttpClient){};

  getEmpleados():Observable<Empleado[]>{
    
    return this.http.get<Empleado[]>(this.baseURL);
  }
  
}