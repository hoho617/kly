import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDetailRoutingModule} from './client-detail-routing.module';
import {ClientDetailComponent} from './client-detail.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        ClientDetailRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      ClientDetailComponent,
    ],
    providers:[
    ]

})
export class ClientDetailModule { }
