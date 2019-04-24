import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderManageRoutingModule} from './order-manage-routing.module';
import {OrderManageComponent} from './order-manage.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import {SearchComponent} from './search/search.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

@NgModule({
    imports: [
        CommonModule,
        OrderManageRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      OrderManageComponent,
      SearchComponent,
      OrderDetailComponent
    ],
    providers:[
    ]

})
export class OrderManageModule { }
