import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FaComponent } from './components/fa/fa.component';
import { FbComponent } from './components/fb/fb.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FaComponent,
    FbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
