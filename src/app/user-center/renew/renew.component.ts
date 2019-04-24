import {Component,ViewEncapsulation} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-renew',
    templateUrl: './renew.component.html',
    styleUrls: ['./renew.less'],
    encapsulation:ViewEncapsulation.None
})
export class RenewComponent {

  public modeWidth:number = (document.body.offsetWidth-30-16)/2;

  public mode = 4;  //默认选择的是1年，第四个


  chooseMode(index){
    this.mode = index;
  }
}
