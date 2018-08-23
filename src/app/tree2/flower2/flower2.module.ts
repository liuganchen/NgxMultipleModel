import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Flower2RoutingModule } from './flower2-routing.module';
import { Pollen2Component } from './pollen2/pollen2.component';

@NgModule({
  imports: [
    CommonModule,
    Flower2RoutingModule
  ],
  declarations: [Pollen2Component]
})
export class Flower2Module { }
