import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfiniteLoadersComponent} from './infinite-loaders.component';

const routes: Routes = [
  {
    path: '', component: InfiniteLoadersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteLoadersRoutingModule {

}
