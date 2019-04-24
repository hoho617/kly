import {AfterViewInit, Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';

import { HomepageService } from './homepage.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.less']
})
export class HomepageComponent implements OnInit,AfterViewInit{
constructor(private homeService:HomepageService){}
  ngOnInit(){
    this.getHotelInfo();
  }
  ngAfterViewInit() {
    // this.refreshData();
  }
  hotelInfo = {};
  getHotelInfo(){
    this.homeService.getHotelInfo().subscribe((val)=>{
      console.log(val);
      let hotelInfo = val.data[1];
      this.hotelInfo = hotelInfo;
      console.log('hotel-info',this.hotelInfo)
      let hotelCode = hotelInfo.hotelCode;
      let groupCode = hotelInfo.groupCode;
      let codeInfo = {
        hotelCode:hotelCode,
        groupCode:groupCode
      }
      localStorage.setItem("$codeInfo",JSON.stringify(codeInfo));
      this.getBusinessDay(hotelCode,groupCode);
    })
  }
  businessDay = '';
  getBusinessDay(hotelCode,groupCode){
    this.homeService.getBusinessDay(hotelCode,groupCode)
      .subscribe((value)=>{
        console.log('business-day',value);
        this.businessDay = value.data;
        localStorage.setItem("$businessDay",this.businessDay);
        this.getHotelData(hotelCode,groupCode,value.data);
      })
  }
  // todayNightCount  todayServicingCount   todayNightallCount
  manageDaily = {};
  getHotelData(hotelCode,groupCode,businessDay){
    this.homeService.getHotelData(hotelCode,groupCode,businessDay)
      .subscribe((value)=>{
        let manageDaily = value.data.reportMode.manageDaily;
        console.log('hotel-data',manageDaily);
        manageDaily.todayRevenueAll = (manageDaily.todayRevenueAll/100).toFixed(2);
        manageDaily.monthRevenueAll = (manageDaily.monthRevenueAll/100).toFixed(2);
        manageDaily.monthRevparallMoney = (manageDaily.monthRevparallMoney/100).toFixed(2);
        manageDaily.monthAverageMoney = (manageDaily.monthAverageMoney/100).toFixed(2);
        manageDaily.monthRoomallRate = (manageDaily.monthRoomallRate);
        manageDaily.monthRevparMoney = (manageDaily.monthRevparMoney/100).toFixed(2);
        manageDaily.todayRoomRate = (manageDaily.todayRoomRate).toFixed(2);

        this.manageDaily = manageDaily;
      })
  }
}
