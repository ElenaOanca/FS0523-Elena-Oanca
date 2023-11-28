import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
