import {Component,ViewEncapsulation,OnInit} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.less'],
    encapsulation:ViewEncapsulation.None
})
export class SearchComponent implements OnInit{



  ngOnInit() {

  }
  onSearch(term: string) {
    /*this.value = term;
    if (term) this.items = this.tbService.search(term);*/
  }

  onCancel() {
    console.log('onCancel');
  }

  onClear() {
    console.log('onCancel');
  }

  onSubmit(value: string) {
    console.log('onSubmit', value);
  }

}
