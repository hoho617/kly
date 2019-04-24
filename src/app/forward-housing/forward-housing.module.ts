import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForwardHousingRoutingModule} from './forward-housing-routing.module';
import {ForwardHousingComponent} from './forward-housing.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        ForwardHousingRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      ForwardHousingComponent,
    ],
    providers:[
    ]

})
export class ForwardHousingModule { }
