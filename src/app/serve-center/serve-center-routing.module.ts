import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServeCenterComponent} from './serve-center.component';

const routes: Routes = [
  {
    path: '', component: ServeCenterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeCenterRoutingModule {

}
