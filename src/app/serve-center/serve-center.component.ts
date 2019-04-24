import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-serve-center',
    templateUrl: './serve-center.component.html',
    styleUrls: ['./serve-center.less'],
    encapsulation:ViewEncapsulation.None
})
export class ServeCenterComponent implements OnInit{

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
