import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import {ɵbl} from 'ngx-weui';

@Component({
    selector: 'app-order-manage',
    templateUrl: './order-manage.component.html',
    styleUrls: ['./order-manage.less'],
    encapsulation:ViewEncapsulation.None
})
export class OrderManageComponent implements OnInit{
  public offsetWidth:number = (document.body.offsetWidth - 30-36)/3;
  public mask:boolean = false; //蒙版
  public drop = -1; //状态、渠道等展开面板
  public item = 4; //选择条项,默认选择的是全部
  public item2 = 4; //选择条项,默认选择的是全部
  public item3 = 4; //选择条项,默认选择的是全部
  res: any = {};


  public items = ['长沙城南店','长沙步行街店', '长沙五一广场店',];
  ngOnInit() {
  }
  showDrop(index){
    this.drop = (this.drop === index?'-1':index);
    this.mask = (this.drop === index?true:false);
  }
  selectItem(index){
    this.item = index;
  }
  selectSource(index) {
    this.item2 = index;
  }
  selectTime(index){
    this.item3 = index;
  }
  closeMask(){
    this.mask = false;
    this.drop = -1;
  }
}
