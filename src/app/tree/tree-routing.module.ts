import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'leaf'},
  {
    path: 'leaf',
    loadChildren: './leaf/leaf.module#LeafModule'
  }, {
    path: 'leaf2',
    loadChildren: './leaf2/leaf2.module#Leaf2Module'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule {
}
