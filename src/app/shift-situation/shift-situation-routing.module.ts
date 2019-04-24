import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShiftSituationComponent} from './shift-situation.component';

const routes: Routes = [
  {
    path: '', component: ShiftSituationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftSituationRoutingModule {
}
