import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Cell1Component} from './cell1/cell1.component';

const routes: Routes = [
  {path: '', redirectTo : 'cell'},
  {path: 'cell', component: Cell1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeafRoutingModule { }
