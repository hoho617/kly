import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ResultInfo } from '../result-info';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }
  suffiex = 'https://g.tianehui.net/r-jte/kiloeye/home-page/';
  hotelListUrl = this.suffiex+'hotel-list'
  businessDayUrl = this.suffiex+'business-day'
  hotelDataUrl = this.suffiex+'hotel-data'
  loginName = 'JTE-qly'



  //异步请求
  getHotelInfo():Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('loginName',this.loginName)
    return this.http.get<ResultInfo<any>>(this.hotelListUrl,{params:params})
  }

  getBusinessDay(hotelCode:string,groupCode:string):Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('hotelCode',hotelCode)
      .append('groupCode',groupCode)
    return this.http.get<ResultInfo<any>>(this.businessDayUrl,{params:params})
  }

  getHotelData(hotelCode:string,groupCode:string,businessDay:string):Observable<ResultInfo<any>> {
    let params = new HttpParams()
      .append('hotelCode',hotelCode)
      .append('groupCode',groupCode)
      .append('businessDay',businessDay)
    return this.http.get<ResultInfo<any>>(this.hotelDataUrl,{params:params})
  }
}
