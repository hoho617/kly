import {Component, ViewEncapsulation, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { RoomStatusService } from './room-status.service';

@Component({
    selector: 'app-room-status',
    templateUrl: './room-status.component.html',
    styleUrls: ['./room-status.less'],
    encapsulation:ViewEncapsulation.None
})
export class RoomStatusComponent implements OnInit{
  public offsetwidth:number = (document.body.offsetWidth-66-30)/4;
  public offsetwidth2:number = (document.body.offsetWidth-48-30)/5;
  public room = 1;
  public tab = 1;

  changeTab(index){
    this.tab = index;
  }



  public fixed:boolean = false;

  test(e){
    console.log('aaaaaaaaaaaaaaaa');
  }

  constructor (private roomService:RoomStatusService){}
  ngOnInit(){
    this.getOrderList();
    this.getRoomType();
    this.room = 8;
  }


  getOrderList(){
    this.roomService.getOrderList().subscribe((val)=>{
      console.log(val);
    })
  }
  roomType = {};
  roomTypeList = [];
  roomTypeObj = {};
  getRoomType(){
    this.roomService.getRoomType().subscribe((val)=>{
      console.log(val);
      let roomType = val.data;
      let roomTypeList = val.data.roomTypeList;
      this.roomType = roomType;
      this.roomTypeList = roomTypeList;
      let VCList = [];
      let VDList = [];
      let OCList = [];
      let ODList = [];
      let RESVList = [];
      let DUE_OUTList = [];
      let OOList = [];

      let roomTypeArr = [];
      let roomTotal = 0;
      roomTypeList.forEach((item)=>{

        item.roomList.forEach((roomItem)=>{
          if(roomItem.state == 'VC'){
            VCList.push(roomItem)
          }else if(roomItem.state == 'VD'){
            VDList.push(roomItem)
          }else if(roomItem.state == 'OD'){
            ODList.push(roomItem)
            DUE_OUTList.push(roomItem)
          }else if(roomItem.state == 'OC'){
            OCList.push(roomItem)
            DUE_OUTList.push(roomItem)
          }else if(roomItem.state == 'RESV'){
            RESVList.push(roomItem)
          }else if(roomItem.state == 'OO'){
            OOList.push(roomItem)
          }

        })
        roomTotal += parseInt(item.roomList.length);

      })
      console.log('VCList',roomTotal)
      roomTypeArr.push({
        "list":VCList,
        "total":VCList.length
      })
      roomTypeArr.push({
        "list":VDList,
        "total":VDList.length
      })
      roomTypeArr.push({
        "list":ODList,
        "total":ODList.length
      })
      roomTypeArr.push({
        "list":OCList,
        "total":OCList.length
      })
      roomTypeArr.push({
        "list":RESVList,
        "total":RESVList.length
      })
      roomTypeArr.push({
        "list":DUE_OUTList,
        "total":DUE_OUTList.length
      })
      roomTypeArr.push({
        "list":OOList,
        "total":OOList.length
      })

      let roomTypeObj = {};
      roomTypeObj.total =roomTotal;
      roomTypeObj.lists = roomTypeArr;


      console.log('roo',roomTypeObj)
      this.roomTypeObj = roomTypeObj;

    })
  }

  selectRoomType(roomState){
    switch (roomState){
      case 'VC':
        this.room = 1;
        break;
      case 'VD':
        this.room = 2;
        break;
        case 'OD':
      this.room = 3;
      break;
      case 'OC':
        this.room = 4;
        break;
      case 'RESV':
        this.room = 5;
        break;
      case 'DUE_OUT':
        this.room = 6;
        break;
      case 'OO':
        this.room = 7;
        break;
      case '':
        this.room = 8;
        break;
    }
    if(roomState == ''){
      this.getRoomType();
    }else {
      this.roomService.selectRoomType(roomState).subscribe((val)=>{
        console.log(val)
        let roomTypeList = val.data.roomTypeList;
        this.roomTypeList = roomTypeList;
      })
    }

  }
}
// import {} from '@angular/core';

@Directive({
  selector:'[onscroll]'
})

export class OnScrollDirective {
  /*constructor(el:ElementRef){
  @HostListener('scroll',['$event','fixed'])
  onscroll = ($event)=>{
    let top = $event.srcElement.scrollingElement.scrollTop;
    let topHeight = el.nativeElement.firstChild.offsetHeight;
    if(top > topHeight){
      el.nativeElement.lastChild.style.display = 'block';
    }else {
      el.nativeElement.lastChild.style.display = 'none';
    }
    }
  }*/
}
