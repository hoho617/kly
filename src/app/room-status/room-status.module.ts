import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomStatusRoutingModule} from './room-status-routing.module';
import {RoomStatusComponent} from './room-status.component';
import {FormsModule} from '@angular/forms';
import { WeUiModule } from 'ngx-weui';
import {OnScrollDirective} from './room-status.component';
import { RoomStatusService } from './room-status.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RoomStatusRoutingModule,
        FormsModule,
        WeUiModule,
      HttpModule,
      HttpClientModule
    ],
    declarations: [
      RoomStatusComponent,
      OnScrollDirective
    ],
    providers:[
      RoomStatusService
    ]

})
export class RoomStatusModule { }
