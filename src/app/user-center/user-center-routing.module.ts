import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCenterComponent} from './user-center.component';
import {RenewComponent} from './renew/renew.component';
import {SettingComponent} from './setting/setting.component';
import {AccountComponent} from './account/account.component';
import {RelationComponent} from './relation/relation.component';
import {BindWechatComponent} from './bind-wechat/bind-wechat.component';
import {AddRelationComponent} from './relation/add-relation/add-relation.component';
import {VersionCenterComponent} from './version-center/version-center.component';
import {CouponComponent} from './coupon/coupon.component';
import {PasswordSecurityComponent} from './password-security/password-security.component';
import {PasswordModifyComponent} from './password-security/password-modify/password-modify.component';
import {PasswordResetComponent} from './password-security/password-reset/password-reset.component';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [
  {
    path: '', component: UserCenterComponent,
  },
  {
    path: 'renew', component: RenewComponent,  //千里眼续费
  },
  {
    path: 'setting', component: SettingComponent, //设置
  },
  {
    path: 'account', component: AccountComponent, //账户信息
  },
  {
    path: 'relation', component: RelationComponent, //关联酒店账户
  },
  {
    path: 'add-relation', component: AddRelationComponent, //关联酒店账户
  },
  {
    path: 'bind-wechat', component: BindWechatComponent, //绑定微信
  },
  {
    path: 'version-center', component: VersionCenterComponent, //版本中心
  },
  {
    path: 'coupon', component: CouponComponent, //我的优惠券
  },
  {
    path: 'password-security', component: PasswordSecurityComponent, //密码安全
  },
  {
    path: 'modify', component: PasswordModifyComponent, //密码修改
  },
  {
    path: 'reset', component: PasswordResetComponent, //密码安全
  },
  {
    path: 'feedback', component: FeedbackComponent, //意见反馈
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule {
}
