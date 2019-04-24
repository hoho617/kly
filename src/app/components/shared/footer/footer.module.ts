import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      FooterComponent,
    ],
    providers:[
    ]

})
export class FooterModule { }
