import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-bind-wechat',
    templateUrl: './bind-wechat.component.html',
    styleUrls: ['./bind-wechat.less'],
    encapsulation:ViewEncapsulation.None
})
export class BindWechatComponent {

  public account;
  public psd;

}
