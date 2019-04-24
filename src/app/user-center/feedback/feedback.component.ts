import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.less'],
    encapsulation:ViewEncapsulation.None
})
export class FeedbackComponent {
    public hotelName;
    public phoneNumber;
  public productWidth = (document.body.offsetWidth-30-9*4-24)/5;
  public item;
  public items = ['长沙城南店','长沙步行街店', '长沙五一广场店',];

  // 类型选择
  public type = 1;
  changeType(index) {
    this.type = index;
  }

  //文本框
  public txta;
}
