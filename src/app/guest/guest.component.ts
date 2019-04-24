import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.less'],
    encapsulation:ViewEncapsulation.None
})
export class GuestComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }

  public nowTab = 1;

  ngOnInit() {

  }

  changeTab(index) {
    this.nowTab = index;
  }

}
