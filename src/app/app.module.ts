import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './reducers';
import { CounterActions } from './actions/counter.actions'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot()
  ],
  providers: [CounterActions,DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>, devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, {},[],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
