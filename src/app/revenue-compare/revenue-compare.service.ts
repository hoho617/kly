import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultInfo } from '../result-info';


@Injectable({
  providedIn: 'root'
})
export class RevenueCompareService {

  constructor(private http:HttpClient) { }
  suffiex = 'https://g.tianehui.net/r-jte/kiloeye/';
  compareUrl = this.suffiex+'than/year-on-year'

  codeInfo = JSON.parse(localStorage.getItem("$codeInfo"));
  groupCode = this.codeInfo.groupCode;
  hotelCode = this.codeInfo.hotelCode;
  getCompareData(businessDay:string):Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('groupCode',this.groupCode)
      .append('hotelCode',this.hotelCode)
      .append('businessDay',businessDay)
    return this.http.get<ResultInfo<any>>(this.compareUrl,{params:params})
  }

}
