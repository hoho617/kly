import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-relation',
    templateUrl: './relation.component.html',
    styleUrls: ['./relation.less'],
    encapsulation:ViewEncapsulation.None
})
export class RelationComponent {

  public cho1 = true;

}
