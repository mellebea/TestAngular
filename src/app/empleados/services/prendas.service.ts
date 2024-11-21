import { Prenda } from './../interfaces/prenda';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PrendasEntregadas } from '../interfaces/PrendasEntrgadas.interface';

@Injectable({providedIn: 'root'})
export class PrendasService {

  private baseURL:string='https://localhost:44301/api/Prendas'
  
  constructor(private httpt: HttpClient) { }

  getPrendas():Observable<Prenda[]>
  {
    return this.httpt.get<Prenda[]>(this.baseURL);
  }

  filtrarPrendasEntregadas(nombre: string = '', apellido: string = ''): Observable<PrendasEntregadas[]> {
    const params = new HttpParams()
      .set('nombre', nombre)
      .set('apellido', apellido);

    return this.httpt.get<PrendasEntregadas[]>(`${this.baseURL}/Filtrar`, { params });
  }
  
}