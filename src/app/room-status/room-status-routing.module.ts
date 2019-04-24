import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomStatusComponent} from './room-status.component';

const routes: Routes = [
  {
    path: '', component: RoomStatusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomStatusRoutingModule {
}
