import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'tree',
    loadChildren: './tree/tree.module#TreeModule'
  },
  {
    path: 'tree2',
    loadChildren: './tree2/tree2.module#Tree2Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
