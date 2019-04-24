import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.less'],
    encapsulation:ViewEncapsulation.None
})
export class CouponComponent {
  public tab = 1;

  changeTab(index){
    this.tab = index;
  }

}
