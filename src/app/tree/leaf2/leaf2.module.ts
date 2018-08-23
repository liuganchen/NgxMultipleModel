import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Leaf2RoutingModule } from './leaf2-routing.module';
import { Cell2Component } from './cell2/cell2.component';

@NgModule({
  imports: [
    CommonModule,
    Leaf2RoutingModule
  ],
  declarations: [Cell2Component]
})
export class Leaf2Module { }
