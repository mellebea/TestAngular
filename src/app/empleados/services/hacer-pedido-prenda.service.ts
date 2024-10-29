import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PrendasPedidas } from '../interfaces/prendasPedidas.interface';
import { Observable } from 'rxjs';
import { Prenda } from '../interfaces/prenda';

@Injectable({providedIn: 'root'})
export class HacerPedidoPrendaService
{

    private MyAppUrl='https://localhost:44301/';
    private MyApiUrl='api/IngresarPedidoPrenda';

    constructor(private http: HttpClient) { }

    
    
    postIngresarPedidoPrenda(pedido:PrendasPedidas):Observable<PrendasPedidas> {

      const url = this.MyAppUrl + this.MyApiUrl;
      console.log('Enviando pedido:', pedido);
      return this.http.post<PrendasPedidas>(url,pedido,{
        headers:new HttpHeaders({'Content-type':'application/json'})
      });
    }

    private baseURL:string='https://localhost:44301/api/Prendas'
    getPrendas():Observable<Prenda[]>
    {
      return this.http.get<Prenda[]>(this.baseURL);
    }


  
}