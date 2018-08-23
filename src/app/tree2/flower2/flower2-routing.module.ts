import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollenComponent} from '../flower/pollen/pollen.component';
import {Pollen2Component} from './pollen2/pollen2.component';

const routes: Routes = [
  {path: 'pollen', component: Pollen2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flower2RoutingModule { }
