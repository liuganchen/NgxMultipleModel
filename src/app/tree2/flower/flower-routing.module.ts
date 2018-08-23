import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PollenComponent} from './pollen/pollen.component';

const routes: Routes = [
  {path: '', redirectTo: 'pollen'},
  {path: 'pollen', component: PollenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowerRoutingModule { }
