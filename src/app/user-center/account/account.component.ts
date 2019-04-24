import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.less'],
    encapsulation:ViewEncapsulation.None
})
export class AccountComponent {

  public cho1 = true;

}
