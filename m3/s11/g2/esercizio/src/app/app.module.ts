import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './parts/part1/part1.component';
import { Part2Component } from './parts/part2/part2.component';
import { Part3Component } from './parts/part3/part3.component';
import { Part4Component } from './parts/part4/part4.component';
import { Part5Component } from './parts/part5/part5.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
