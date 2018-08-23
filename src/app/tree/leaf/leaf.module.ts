import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafRoutingModule } from './leaf-routing.module';
import { Cell1Component } from './cell1/cell1.component';

@NgModule({
  imports: [
    CommonModule,
    LeafRoutingModule
  ],
  declarations: [Cell1Component]
})
export class LeafModule { }
