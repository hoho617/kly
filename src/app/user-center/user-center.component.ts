import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

import { DialogService, DialogConfig, DialogComponent } from 'ngx-weui';

@Component({
    selector: 'app-user-center',
    templateUrl: './user-center.component.html',
    styleUrls: ['./user-center.less'],
    encapsulation:ViewEncapsulation.None
})
export class  UserCenterComponent{
  @ViewChild('auto') autoAs:DialogComponent;
  config:DialogConfig = {};
  onShow(){
    this.config = {
      title:'确定解绑微信吗',
      // content:'wwwwww',
      cancel:'取消',
      confirm:'确定'
    }
    setTimeout(()=>{
      (<DialogComponent>this['autoAs']).show().subscribe((res)=>{
        console.log(res);
      })
    },10);
    return false;
  }
  constructor(private srv: DialogService) {
  }

}
