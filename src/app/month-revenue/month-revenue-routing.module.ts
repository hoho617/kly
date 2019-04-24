import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonthRevenueComponent} from './month-revenue.component';

const routes: Routes = [
  {
    path: '', component: MonthRevenueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthRevenueRoutingModule {

}
