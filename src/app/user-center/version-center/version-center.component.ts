import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-version-center',
    templateUrl: './version-center.component.html',
    styleUrls: ['./version-center.less'],
    encapsulation:ViewEncapsulation.None
})
export class VersionCenterComponent {

  public cho1 = true;

}
