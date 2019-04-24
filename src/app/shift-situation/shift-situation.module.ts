import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShiftSituationRoutingModule} from './shift-situation-routing.module';
import {ShiftSituationComponent} from './shift-situation.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
      ShiftSituationRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      ShiftSituationComponent,
    ],
    providers:[
    ]

})
export class ShiftSituationModule { }
