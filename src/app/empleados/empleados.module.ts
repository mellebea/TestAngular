import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MaterialModule,
  ]
})
export class EmpleadosModule { }
