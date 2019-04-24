import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfiniteLoadersRoutingModule} from './infinite-loaders-routing.module';
import {InfiniteLoadersComponent} from './infinite-loaders.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';

@NgModule({
    imports: [
        CommonModule,
        InfiniteLoadersRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      InfiniteLoadersComponent,
    ],
    providers:[
    ]

})
export class InfiniteLoadersModule { }
