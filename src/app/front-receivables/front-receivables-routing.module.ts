import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontReceivablesComponent} from './front-receivables.component';

const routes: Routes = [
  {
    path: '', component: FrontReceivablesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontReceivablesRoutingModule {
}
