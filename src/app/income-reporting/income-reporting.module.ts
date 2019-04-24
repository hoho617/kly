import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncomeReportingRoutingModule} from './income-reporting-routing.module';
import {IncomeReportingComponent} from './income-reporting.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import { NgxEchartsModule } from 'ngx-echarts';
import { IncomeReportingService } from './income-reporting.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        IncomeReportingRoutingModule,
        FormsModule,
        WeUiModule,
      NgxEchartsModule,
      HttpModule,
      HttpClientModule
    ],
    declarations: [
      IncomeReportingComponent,
    ],
    providers:[
      IncomeReportingService
    ]

})
export class IncomeReportingModule { }
