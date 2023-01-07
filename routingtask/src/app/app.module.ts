import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { D1Component } from './d1/d1.component';
import { D2Component } from './d2/d2.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    B1Component,
    B2Component,
    D1Component,
    D2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
