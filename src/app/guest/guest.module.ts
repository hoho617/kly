import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuestRoutingModule} from './guest-routing.module';
import {GuestComponent} from './guest.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        GuestRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      GuestComponent,
    ],
    providers:[
    ]

})
export class GuestModule { }
