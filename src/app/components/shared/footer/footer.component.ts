import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.less'],
    encapsulation:ViewEncapsulation.None
})
export class FooterComponent implements OnInit{

  ngOnInit() {

  }
  

}
