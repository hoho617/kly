import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RevenueCompareComponent} from './revenue-compare.component';

const routes: Routes = [
  {
    path: '', component: RevenueCompareComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueCompareRoutingModule {

}
