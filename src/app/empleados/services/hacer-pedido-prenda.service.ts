import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrendasPedidas } from '../interfaces/prendasPedidas.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HacerPedidoPrendaService {

    private MyAppUrl='https://localhost:44301/';
    private MyApiUrl='api/IngresarPedidoPrenda';

  constructor(private http: HttpClient) { }

  postIngresarPedidoPrenda(pedido:PrendasPedidas):Observable<PrendasPedidas> {
    const url = `${this.MyAppUrl}${this.MyApiUrl}`;
    return this.http.post<PrendasPedidas>(url,pedido);
  }


  
}