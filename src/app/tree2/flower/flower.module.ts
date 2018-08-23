import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowerRoutingModule } from './flower-routing.module';
import { PollenComponent } from './pollen/pollen.component';

@NgModule({
  imports: [
    CommonModule,
    FlowerRoutingModule
  ],
  declarations: [PollenComponent]
})
export class FlowerModule { }
