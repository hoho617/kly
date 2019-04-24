import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ResultInfo} from '../result-info';

@Injectable({
  providedIn: 'root'
})
export class RoomStatusService {

  constructor(private http:HttpClient) { }
  suffiex = 'https://g.tianehui.net/r-jte/kiloeye/';
  orderListUrl = this.suffiex+'room-status/estimated-order-list'
  roomTypeUrl = this.suffiex+'room-status/room-type'

  codeInfo = JSON.parse(localStorage.getItem("$codeInfo"));
  groupCode = this.codeInfo.groupCode;
  hotelCode = this.codeInfo.hotelCode;
  getOrderList():Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('groupCode',this.groupCode)
      .append('hotelCode',this.hotelCode)

    return this.http.get<ResultInfo<any>>(this.orderListUrl,{params:params})
  }
  getRoomType():Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('groupCode',this.groupCode)
      .append('hotelCode',this.hotelCode)

    return this.http.get<ResultInfo<any>>(this.roomTypeUrl,{params:params})
  }
  selectRoomType(roomState:string):Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('roomState',roomState)
      .append('groupCode',this.groupCode)
      .append('hotelCode',this.hotelCode)

    return this.http.get<ResultInfo<any>>(this.roomTypeUrl,{params:params})
  }
}
