import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'flower'},
  {
    path: 'flower',
    loadChildren: './flower/flower.module#FlowerModule'
  }, {
    path: 'flower2',
    loadChildren: './flower2/flower2.module#Flower2Module'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tree2RoutingModule {
}
