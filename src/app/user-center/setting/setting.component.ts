import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.less'],
    encapsulation:ViewEncapsulation.None
})
export class SettingComponent {

  public cho1 = true;

}
