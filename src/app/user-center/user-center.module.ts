import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCenterRoutingModule} from './user-center-routing.module';
import {UserCenterComponent} from './user-center.component';
import {FormsModule} from '@angular/forms';
import {WeUiModule} from 'ngx-weui';
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

@NgModule({
    imports: [
        CommonModule,
        UserCenterRoutingModule,
        FormsModule,
        WeUiModule
    ],
    declarations: [
      UserCenterComponent,
      RenewComponent,
      SettingComponent,
      AccountComponent,
      RelationComponent,
      AddRelationComponent,
      BindWechatComponent,
      VersionCenterComponent,
      CouponComponent,
      PasswordSecurityComponent,
      PasswordModifyComponent,
      PasswordResetComponent,
      FeedbackComponent
    ],
    providers:[
    ]

})
export class UserCenterModule { }
