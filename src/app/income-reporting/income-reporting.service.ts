import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultInfo } from '../result-info';

@Injectable({
  providedIn: 'root'
})
export class IncomeReportingService {

  constructor(private http:HttpClient) { }

  suffiex = 'https://g.tianehui.net/r-jte/kiloeye/';
  yesterdayRevenueDataUrl = this.suffiex+'income/yesterday-revenue'

  codeInfo = JSON.parse(localStorage.getItem("$codeInfo"));
  businessDay = localStorage.getItem("$businessDay");
  getYesRevenue():Observable<ResultInfo<any>>{
    let params = new HttpParams()
      .append('groupCode',this.codeInfo.groupCode)
      .append('hotelCode',this.codeInfo.hotelCode)
      .append('flag',"0")
      .append('type','0')
      .append('businessDay',this.businessDay)
      .append('businessDayFlag','4')
      .append('condtionType','1')
    return this.http.get<ResultInfo<any>>(this.yesterdayRevenueDataUrl,{params:params})
  }
}
