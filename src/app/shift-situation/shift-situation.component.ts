import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-shift-situation',
    templateUrl: './shift-situation.component.html',
    styleUrls: ['./shift-situation.less'],
    encapsulation:ViewEncapsulation.None
})
export class ShiftSituationComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }



  collapsible:boolean = false;
  list:any= [
    {
      date:'01-15',
      shift:3,
      up:60000,
      down:50000,
      disabled:false,
      active:false,
      extraList:[
        {
          shift:'0000000033',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000044',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
      ]
    },{
      date:'02-15',
      shift:6,
      up:60000,
      down:50000,
      disabled:false,
      active:false,
      extraList:[
        {
          shift:'0000000011',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000222',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000011',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000222',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
      ]
    },
    {
      date:'02-15',
      shift:6,
      up:60000,
      down:50000,
      disabled:false,
      active:false,
      extraList:[
        {
          shift:'0000000011',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000222',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
      ]
    },{
      date:'02-15',
      shift:6,
      up:60000,
      down:50000,
      disabled:false,
      active:false,
      extraList:[
        {
          shift:'0000000011',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000222',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
      ]
    },
    {
      date:'02-15',
      shift:6,
      up:60000,
      down:50000,
      disabled:false,
      active:false,
      extraList:[
        {
          shift:'0000000011',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
        {
          shift:'0000000222',
          up:60000,
          down:50000,
          disabled:false,
          active:false,
        },
      ]
    }
  ];

  public item = '';
  public items = ['长沙城南店','长沙步行街店', '长沙五一广场店',];
  ngOnInit() {

  }


  index: number = 0;
  select(index: number) {
    this.index = index;
  }

}
