import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-password-security',
    templateUrl: './password-security.component.html',
    styleUrls: ['./password-security.less'],
    encapsulation:ViewEncapsulation.None
})
export class PasswordSecurityComponent {

  public cho1 = true;

}
