import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

export const INCREMENT = 'INCREMENT';


@Injectable()
export class CounterActions {
  constructor(private ngRedux: NgRedux<any>) {}

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
