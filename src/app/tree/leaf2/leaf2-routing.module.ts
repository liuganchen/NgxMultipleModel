import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Cell2Component} from './cell2/cell2.component';

const routes: Routes = [
  {path: '', redirectTo: 'cell'},
  {path: 'cell' , component: Cell2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Leaf2RoutingModule { }
