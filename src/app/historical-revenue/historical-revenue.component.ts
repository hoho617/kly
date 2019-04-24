import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-historical-revenue',
    templateUrl: './historical-revenue.component.html',
    styleUrls: ['./historical-revenue.less'],
    encapsulation:ViewEncapsulation.None
})
export class HistoricalRevenueComponent implements OnInit{

  DT:any = {
    min:new Date(2015,1),
    max:new Date()
  };
  res:any = {
    date:new Date()
  }

  option = {
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
          {value:30, name:'OTA'},
          {value:6, name:'其它'},
          {value:10, name:'直销'},
        ],
        itemStyle: {
          normal:{
            label:{
              show:false //隐藏标示文字
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

  ngOnInit() {

  }


}
