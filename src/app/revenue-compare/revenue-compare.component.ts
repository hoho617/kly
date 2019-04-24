import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
declare var echarts: any;

import { RevenueCompareService } from './revenue-compare.service'
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-revenue-compare',
    templateUrl: './revenue-compare.component.html',
    styleUrls: ['./revenue-compare.less'],
    encapsulation:ViewEncapsulation.None
})
export class RevenueCompareComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }




  public tab = 1;

  changeTab(index){
    this.tab = index;
  }
  constructor (private compareService:RevenueCompareService,private dataPipe:DatePipe){}
  ngOnInit() {
    let businessDay = this.dataPipe.transform(this.res.date, 'yyyy-MM-dd');
    this.getCompareData(businessDay);

  }
  thisList = [];
  monthList = [];
  getCompareData(businessDay){
    this.compareService.getCompareData(businessDay)
      .subscribe((val)=>{
        console.log(val);
        let thisList = val.data.thisList;
        thisList.forEach((item)=>{
          item.monthRevenueAll = (item.monthRevenueAll/100000).toFixed(2);
          if(item.lastyearRevenueAll == 0){
            item.tongRate = 0;
          }else {
            item.tongRate = (item.monthRevenueAll-item.lastyearRevenueAll)/item.lastyearRevenueAll;
          }

        })
        this.thisList = thisList;
        this.monthList = val.data.timeList;
        this.setOption(val.data);
        this.setOption1(val.data);
        this.setOption2(val.data);
        this.setOption3(val.data);
        this.setOption4(val.data);
        this.setOption5(val.data);
        this.setOption6(val.data);
      })
  }
  pickerDate(e){
    let businessDay = this.dataPipe.transform(this.res.date, 'yyyy-MM-dd');
    this.getCompareData(businessDay)
  }
  option = {};
  option1 = {};
  option2 = {};
  option3 = {};
  option4 = {};
  option5 = {};
  option6 = {};
  setOption(data){
    let timeList = data.timeList;
    let lastyearRevenue = [];
    let yearRevenue = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearRevenue.push(item.lastyearRevenueAll)
      yearRevenue.push(item.monthRevenueAll)
      tongRates.push(item.tongRate)
    })

    console.log(lastyearRevenue,yearRevenue,tongRates)
    this.option =  {
      tooltip : {
        trigger: 'axis',
          axisPointer: {
          type: 'cross',
            crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年营业收入','今年营业收入','同比增长率'],
          bottom:10,
          itemWidth:15,
          itemHeight:15,
          textStyle:{
          color:'#9FA0A0',
            fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
          right:'15%',
          top:'5%'
      },
      calculable : true,
        xAxis : [  // x轴样式
      {
        type : 'category',
        data : timeList,
        /*axisPointer: {
          type: 'shadow'
        },*/
        axisLine:{ // 线条样式
          lineStyle:{
            color:'#9FA0A0',
            width:1
          }
        }
      }
    ],
      yAxis : [
      {
        type : 'value',
        // min:1, // 最小值
        // max:10, //最大值
        axisLabel:{  //坐标轴上的文字
          formatter:'{value} k',
          // formatter:function (value) {
          //   return value
          // },
        },
        axisLine:{
          lineStyle:{
            color:'#9FA0A0',
            width:1
          }
        }
      },
      {
        type: 'value',
        // min: -20,
        // max: 60,
        axisLabel: {
          formatter: '{value} %',
          color:'#9FA0A0'
        },
        axisLine:{ // 线条样式
          show:false
        },
        axisTick:{show:false},
        splitLine:{show:false},
      }
    ],
      series : [
      {
        name:'去年营业收入',
        type:'bar',
        data:lastyearRevenue,
        center: ['50%', '50%'],
        itemStyle:{
          normal:{
            color:new echarts.graphic.LinearGradient(
              0,0,0,1,
              [
                {offset:0,color:'#FD6A59'},
                {offset:1,color:'#FED3CD'}
              ])
          }
        },
        // barWidth:15

      },
      {
        name:'今年营业收入',
        type:'bar',
        data:yearRevenue,
        // barWidth:15,
        itemStyle:{ // 柱状图的颜色
          normal:{
            color:new echarts.graphic.LinearGradient(
              0,0,0,1,
              [
                {offset:0,color:'#10A0FF'},
                {offset:1,color:'#A7DCFF'}
              ])
          }
        }

      }, {
        name:'同比增长率',
        type:'line',
        yAxisIndex: 1,
        data:tongRates,
        lineStyle:{
          color:'#FD6452',
          width:2
        },
        smooth:true,
        symbol:'circle',
        symbolSize:6,
        itemStyle:{
          normal:{
            color:'#FD6452'
          }
        }
      }
    ]
    };
  }
  setOption1(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option1 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
  setOption2(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option2 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
  setOption3(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option3 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
  setOption4(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option4 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
  setOption5(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option5 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
  setOption6(data){
    let timeList = data.timeList;
    let lastyearIncome = [];
    let yearIncome = [];
    let tongRates = [];
    data.thisList.forEach((item)=>{
      lastyearIncome.push(item.lastyearIncomeAll)
      yearIncome.push(item.monthIncomeAll)
      if(item.lastyearIncomeAll == 0){
        item.tongRate = 0;
      }else {
        item.tongRate = (item.monthIncomeAll-item.lastyearIncomeAll)/item.lastyearIncomeAll;
      }
      tongRates.push(item.tongRate)
    })

    console.log(lastyearIncome,yearIncome,tongRates)
    this.option6 =  {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: { // 图例的样式
        data:['去年收款','今年收款','同比增长率'],
        bottom:10,
        itemWidth:15,
        itemHeight:15,
        textStyle:{
          color:'#9FA0A0',
          fontSize:11,
        }
      },
      grid:{  //图的位置
        left:'14%',
        right:'15%',
        top:'5%'
      },
      calculable : true,
      xAxis : [  // x轴样式
        {
          type : 'category',
          data : timeList,
          /*axisPointer: {
            type: 'shadow'
          },*/
          axisLine:{ // 线条样式
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          // min:1, // 最小值
          // max:10, //最大值
          axisLabel:{  //坐标轴上的文字
            formatter:'{value} k',
            // formatter:function (value) {
            //   return value
            // },
          },
          axisLine:{
            lineStyle:{
              color:'#9FA0A0',
              width:1
            }
          }
        },
        {
          type: 'value',
          // min: -20,
          // max: 60,
          axisLabel: {
            formatter: '{value} %',
            color:'#9FA0A0'
          },
          axisLine:{ // 线条样式
            show:false
          },
          axisTick:{show:false},
          splitLine:{show:false},
        }
      ],
      series : [
        {
          name:'去年收款',
          type:'bar',
          data:lastyearIncome,
          center: ['50%', '50%'],
          itemStyle:{
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#31CC8A'},
                  {offset:1,color:'#BAEED8'}
                ])
            }
          },
          // barWidth:15

        },
        {
          name:'今年收款',
          type:'bar',
          data:yearIncome,
          // barWidth:15,
          itemStyle:{ // 柱状图的颜色
            normal:{
              color:new echarts.graphic.LinearGradient(
                0,0,0,1,
                [
                  {offset:0,color:'#10A0FF'},
                  {offset:1,color:'#A7DCFF'}
                ])
            }
          }

        }, {
          name:'同比增长率',
          type:'line',
          yAxisIndex: 1,
          data:tongRates,
          lineStyle:{
            color:'#FD6452',
            width:2
          },
          smooth:true,
          symbol:'circle',
          symbolSize:6,
          itemStyle:{
            normal:{
              color:'#FD6452'
            }
          }
        }
      ]
    };
  }
}
