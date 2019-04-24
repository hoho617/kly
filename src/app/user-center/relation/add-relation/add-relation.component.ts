import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-add-relation',
    templateUrl: './add-relation.component.html',
    styleUrls: ['./add-relation.less'],
    encapsulation:ViewEncapsulation.None
})
export class AddRelationComponent {
    public account;
    public psd;

}
