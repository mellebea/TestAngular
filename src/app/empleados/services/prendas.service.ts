import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenda } from '../interfaces/prenda';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private baseURL:string='https://localhost:44301/api/Prendas'
  
  constructor(private httpt: HttpClient) { }

  getPrendas():Observable<Prenda[]>
  {
    return this.httpt.get<Prenda[]>(this.baseURL);
  }
  
}