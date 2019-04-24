import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-forward-housing',
    templateUrl: './forward-housing.component.html',
    styleUrls: ['./forward-housing.less'],
    encapsulation:ViewEncapsulation.None
})
export class ForwardHousingComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }



  ngOnInit() {

  }


}
