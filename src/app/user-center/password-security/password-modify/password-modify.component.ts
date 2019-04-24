import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-password-modify',
    templateUrl: './password-modify.component.html',
    styleUrls: ['./password-modify.less'],
    encapsulation:ViewEncapsulation.None
})
export class PasswordModifyComponent {
    public oldPsd;
    public psd;
  public confirmPsd;

}
