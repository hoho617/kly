import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.less'],
    encapsulation:ViewEncapsulation.None
})
export class PasswordResetComponent {
    public username;
  public phoneNumber;
    public messageCode;
  public psd;

}
