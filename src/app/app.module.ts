import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
