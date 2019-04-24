import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { InfiniteLoaderComponent } from 'ngx-weui';

@Component({
    selector: 'app-infinite-loaders',
    templateUrl: './infinite-loaders.component.html',
    styleUrls: ['./infinite-loaders.less'],
    encapsulation:ViewEncapsulation.None
})
export class InfiniteLoadersComponent{
  @ViewChild(InfiniteLoaderComponent) il;
  restartBtn = false;

  items: any[] = Array(10)
    .fill(0)
    .map((v: any, i: number) => i);  //第一次显示20条数据
  onLoadMore(comp: InfiniteLoaderComponent) {
    this.restartBtn = false;
    timer(1500).subscribe(() => {
      this.items.push(
        ...Array(10)
          .fill(10)
          .map((v, i) => v + i),
      );

      if (this.items.length >= 50) {
        this.restartBtn = true;
        comp.setFinished();
        return;
      }
      comp.resolveLoading();
    });
  }

  restart() {
    this.items.length = 0;
    this.il.restart();
  }
}
