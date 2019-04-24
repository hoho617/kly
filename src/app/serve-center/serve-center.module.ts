import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServeCenterRoutingModule} from './serve-center-routing.module';
import {ServeCenterComponent} from './serve-center.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        ServeCenterRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      ServeCenterComponent,
    ],
    providers:[
    ]

})
export class ServeCenterModule { }
