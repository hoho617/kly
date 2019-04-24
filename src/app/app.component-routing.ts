import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomStatusModule} from './room-status/room-status.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule'
  },
  {
    path:'income-report',
    loadChildren:'./income-reporting/income-reporting.module#IncomeReportingModule'
  },
  {
    path:'month-revenue',
    loadChildren:'./month-revenue/month-revenue.module#MonthRevenueModule'
  },
  {
    path: 'room-status',/*实时房态*/
    loadChildren: './room-status/room-status.module#RoomStatusModule'
  },
  {
    path: 'client-detail',/*客人详情*/
    loadChildren: './client-detail/client-detail.module#ClientDetailModule'
  },
  {
    path: 'shift-situation',/*交班概况*/
    loadChildren: './shift-situation/shift-situation.module#ShiftSituationModule'
  },
  {
    path: 'front-receivables',/*前台收款*/
    loadChildren: './front-receivables/front-receivables.module#FrontReceivablesModule'
  },
  {
    path: 'changes',/*异动*/
    loadChildren: './changes/changes.module#ChangesModule'
  },
  {
    path: 'forward-housing',/*远期房态*/
    loadChildren: './forward-housing/forward-housing.module#ForwardHousingModule'
  },
  {
    path: 'guest',/*客人*/
    loadChildren: './guest/guest.module#GuestModule'
  },
  {
    path: 'serve-center',/*服务中心*/
    loadChildren: './serve-center/serve-center.module#ServeCenterModule'
  },
  {
    path: 'income-reporting',/*收益早报*/
    loadChildren: './income-reporting/income-reporting.module#IncomeReportingModule'
  },
  {
    path: 'historical-revenue',/*历史营收*/
    loadChildren: './historical-revenue/historical-revenue.module#HistoricalRevenueModule'
  },
  {
    path: 'order-manage',/*订单管理*/
    loadChildren: './order-manage/order-manage.module#OrderManageModule'
  },
  {
    path: 'user-center',/*个人中心*/
    loadChildren: './user-center/user-center.module#UserCenterModule'
  },
  {
    path: 'loader',/*滚动加载*/
    loadChildren: './infinite-loaders/infinite-loaders.module#InfiniteLoadersModule'
  },
  {
    path: 'revenue-compare/:flag',/*营收对比*/
    loadChildren: './revenue-compare/revenue-compare.module#RevenueCompareModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
