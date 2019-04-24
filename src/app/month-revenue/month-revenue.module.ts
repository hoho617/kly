import {NgModule} from '@angular/core';
import {CommonModule,DatePipe} from '@angular/common';
import {MonthRevenueRoutingModule} from './month-revenue-routing.module';
import {MonthRevenueComponent} from './month-revenue.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import { NgxEchartsModule } from 'ngx-echarts';
import { MonthRevenueService } from './month-revenue.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
      MonthRevenueRoutingModule,
        FormsModule,
        WeUiModule,
      NgxEchartsModule,
      HttpModule,
      HttpClientModule,
    ],
    declarations: [
      MonthRevenueComponent,
    ],
    providers:[
      MonthRevenueService,DatePipe
    ]

})
export class MonthRevenueModule { }
