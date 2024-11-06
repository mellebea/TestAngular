import { Pedido } from './../interfaces/pedido';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenda } from '../interfaces/prenda';

@Injectable({providedIn: 'root'})

export class PedidoService {

  private MyAppUrl='https://localhost:44301/api/PedidoConPrenda/InsertarPedidoConPrendas';
  

  constructor(private http: HttpClient) { }

  postIngresarPedidoConPrenda(pedido:any):Observable<any> {

    const url = this.MyAppUrl;
    console.log('Enviando pedido:', pedido);
    return this.http.post<Pedido>(url,pedido,{
      headers:new HttpHeaders({'Content-type':'application/json'})
    });
  }

  private baseURL:string='https://localhost:44301/api/Prendas'
    getPrendas():Observable<Prenda[]>
    {
      return this.http.get<Prenda[]>(this.baseURL);
    }
  
}