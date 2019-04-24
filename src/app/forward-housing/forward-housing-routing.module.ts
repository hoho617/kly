import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForwardHousingComponent} from './forward-housing.component';

const routes: Routes = [
  {
    path: '', component: ForwardHousingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForwardHousingRoutingModule {

}
