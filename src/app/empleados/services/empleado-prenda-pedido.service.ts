import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoPrendaPedidoService {

    private MyAppUrl='https://localhost:44301/';
    private MyApiUrl='api/EmpleadosPrendasPedidas/';

    //Inyecto una variable de tipo http
     
    constructor(private http:HttpClient) { }

    
    
    //Crear un metodo para obtener el listado de empleados y sus pedidos
    getListEmpleadoPrendaPedida():Observable<any>{
      return this.http.get(this.MyAppUrl + this.MyApiUrl);
    }

}
