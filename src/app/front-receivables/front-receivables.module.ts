import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontReceivablesRoutingModule} from './front-receivables-routing.module';
import {FrontReceivablesComponent} from './front-receivables.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
      FrontReceivablesRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      FrontReceivablesComponent,
    ],
    providers:[
    ]

})
export class FrontReceivablesModule { }
