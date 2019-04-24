import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoricalRevenueRoutingModule} from './historical-revenue-routing.module';
import {HistoricalRevenueComponent} from './historical-revenue.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports: [
        CommonModule,
        HistoricalRevenueRoutingModule,
        FormsModule,
        WeUiModule,
      NgxEchartsModule
    ],
    declarations: [
      HistoricalRevenueComponent,
    ],
    providers:[
    ]

})
export class HistoricalRevenueModule { }
