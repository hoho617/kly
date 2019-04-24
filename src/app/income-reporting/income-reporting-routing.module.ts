import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncomeReportingComponent} from './income-reporting.component';

const routes: Routes = [
  {
    path: '', component: IncomeReportingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeReportingRoutingModule {

}
