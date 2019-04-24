import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangesRoutingModule} from './changes-routing.module';
import {ChangesComponent} from './changes.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        ChangesRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      ChangesComponent,
    ],
    providers:[
    ]

})
export class ChangesModule { }
