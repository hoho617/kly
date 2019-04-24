import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-weui';
import { WeUiModule } from 'ngx-weui';
import { FooterModule } from '../components/shared/footer/footer.module';
import { HomepageService } from './homepage.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports: [
        CommonModule,
        HomepageRoutingModule,
        FormsModule,
      SwiperModule,
      WeUiModule,
      HttpModule,
      FooterModule,
      HttpClientModule,
      NgxEchartsModule
    ],
    declarations: [
        HomepageComponent
    ],
    providers:[
      HomepageService,
      DatePipe
    ]

})
export class HomepageModule { }
