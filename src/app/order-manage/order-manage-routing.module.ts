import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderManageComponent} from './order-manage.component';
import {SearchComponent} from './search/search.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '', component: OrderManageComponent,
  },
  {
    path: 'search', component: SearchComponent,
  },
  {
    path: 'order-detail', component: OrderDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManageRoutingModule {
}
