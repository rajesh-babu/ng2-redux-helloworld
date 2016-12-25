import { Component } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { CounterActions } from './actions/counter.actions'


@Component({
  selector: 'app-root',
  template: '<button (click)="onClick()">Clicked {{ count$ | async }} times</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() count$: Observable<number>;
  constructor(private ngRedux: NgRedux<any>, private counterActions: CounterActions) {}

  onClick() {
    this.counterActions.increment();
  }
}
