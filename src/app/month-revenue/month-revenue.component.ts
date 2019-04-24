import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import {DatePipe} from '@angular/common';

import { MonthRevenueService } from './month-revenue.service';

@Component({
    selector: 'app-month-revenue',
    templateUrl: './month-revenue.component.html',
    styleUrls: ['./month-revenue.less'],
    encapsulation:ViewEncapsulation.None
})
export class MonthRevenueComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    nowdate:new Date()
  }



  isDisabled = true;
  option = {};

  constructor(private monthService:MonthRevenueService,private dataPipe: DatePipe) {}
  ngOnInit() {
    let businessDay = this.dataPipe.transform(this.res.nowdate, 'yyyy-MM-dd');
    this.getIncomeData(businessDay,'3');
  }
  incomeInfo = {};
  manageDaily = {};
  otaMap = {};
  roomTypeOperateList = []
  getIncomeData(businessDay,businessDayFlag){
    this.monthService.getYesRevenue(businessDay,'1',businessDayFlag,'2').subscribe((val)=>{
      console.log('income',val)
      let incomeInfo = val.data;
      this.incomeInfo = incomeInfo;
      let manageDaily = incomeInfo.manageDaily;

      console.log('hotel-data',manageDaily);
      manageDaily.monthRevenueAll = (manageDaily.monthRevenueAll/100).toFixed(2);
      manageDaily.monthRoomAll = (manageDaily.monthRoomAll/100).toFixed(2);
      manageDaily.monthRevparallMoney = (manageDaily.monthRevparallMoney/100).toFixed(2);
      manageDaily.monthAverageMoney = (manageDaily.monthAverageMoney/100).toFixed(2);
      manageDaily.monthRoomallRate = (manageDaily.monthRoomallRate);
      manageDaily.monthRevparMoney = (manageDaily.monthRevparMoney/100).toFixed(2);
      manageDaily.todayRoomRate = (manageDaily.todayRoomRate).toFixed(2);

      this.manageDaily = manageDaily;
      this.otaMap = incomeInfo.otaMap;
      let roomTypeOperateList = incomeInfo.salses.roomTypeOperateList;
      roomTypeOperateList.forEach((item)=>{
        item.averagePrice = (item.averagePrice/100).toFixed(2)
      })
      this.roomTypeOperateList = roomTypeOperateList;
      this.option = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          x:'center',
          y:'center',
          itemHeight:25, //旁边色块的高度
          itemWidth:50,//旁边色块的宽度
          textStyle:{  ////旁边色块的文字样式
            fontSize:13
          },
          data: ['OTA','直销','其它']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '85%',
            center: ['52%', '46%'],
            data:[
              {value:incomeInfo.statistical[0].orderCounts, name:'OTA'},
              {value:incomeInfo.statistical[1].orderCounts, name:'直销'},
              {value:incomeInfo.statistical[2].orderCounts, name:'其它'},
            ],
            itemStyle: {
              normal:{
                label:{
                  show:false, //隐藏标示文字
                  formatter:"{d}%"
                },
                labelLine: {
                  show:false
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            color:['#FFB6AB','#FF995E','#FD6452'] // 每个区域的颜色
          }
        ]
      };
    })
  }

  pickerDate(e){
    console.log(e)
    let businessDay = this.dataPipe.transform(this.res.nowdate, 'yyyy-MM-dd');
    this.getIncomeData(businessDay,'3');
  }
  nowDate = this.res.nowdate;

  skipMonth(businessDayFlag){
    let businessDay = this.dataPipe.transform(this.nowDate, 'yyyy-MM-dd');
    var d = this.res.nowdate;
    console.log(d)
    console.log(this.res.nowdate)
    // d.setMonth(d.getMonth()+1);
    switch (businessDayFlag){
      case 6:
        d.setMonth(d.getMonth()-1);
        businessDay = this.dataPipe.transform(d, 'yyyy-MM-dd');
        this.res = {
          nowdate:d
        }
        this.getIncomeData(businessDay,businessDayFlag);
        break;
      case 7:
        d.setMonth(d.getMonth()+1);
        businessDay = this.dataPipe.transform(d, 'yyyy-MM-dd');
        this.res = {
          nowdate:d
        }
        this.getIncomeData(businessDay,businessDayFlag);
        break;
    }


  }
}
