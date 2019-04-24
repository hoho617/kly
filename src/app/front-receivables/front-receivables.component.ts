import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-front-receivables',
    templateUrl: './front-receivables.component.html',
    styleUrls: ['./front-receivables.less'],
    encapsulation:ViewEncapsulation.None
})
export class FrontReceivablesComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }

  public offsetWidth:number = (document.body.offsetWidth-30-9)/2;


  ngOnInit() {

  }


}
