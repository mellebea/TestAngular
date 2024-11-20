import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleados.interface';




@Injectable({providedIn: 'root'})


export class EmpleadosService {

  private baseURL: string = 'https://localhost:44301/api/Empleado';
                          

  constructor (private http:HttpClient){};

  
  getEmpleados():Observable<Empleado[]>{
 
    return this.http.get<Empleado[]>(this.baseURL);
  }

  postEmpleado(empleado:Empleado):Observable<any> {
    
    return  this.http.post<Empleado>('https://localhost:44301/api/Empleado',empleado,{
      headers:new HttpHeaders({'Content-type':'application/json'})
      }

      );
  }

  filtrarEmpleado(nombre: string = '', apellido: string = ''): Observable<Empleado[]> {
    const params = new HttpParams()
      .set('nombre', nombre)
      .set('apellido', apellido);

    return this.http.get<Empleado[]>(`${this.baseURL}/Filtrar`, { params });
  }

  putEmpleado(id: number, empleado: Empleado): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, empleado, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  
}