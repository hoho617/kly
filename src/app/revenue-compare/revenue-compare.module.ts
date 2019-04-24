import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RevenueCompareRoutingModule} from './revenue-compare-routing.module';
import {RevenueCompareComponent} from './revenue-compare.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import { NgxEchartsModule } from 'ngx-echarts';
import { RevenueCompareService } from './revenue-compare.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RevenueCompareRoutingModule,
        FormsModule,
        WeUiModule,
      NgxEchartsModule,
      HttpModule,
      HttpClientModule
    ],
    declarations: [
      RevenueCompareComponent,
    ],
    providers:[
      RevenueCompareService,DatePipe
    ]

})
export class RevenueCompareModule { }
