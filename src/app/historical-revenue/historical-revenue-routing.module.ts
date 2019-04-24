import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoricalRevenueComponent} from './historical-revenue.component';

const routes: Routes = [
  {
    path: '', component: HistoricalRevenueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalRevenueRoutingModule {

}
