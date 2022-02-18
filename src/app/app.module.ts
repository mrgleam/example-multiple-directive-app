import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEnglishOnlyModule } from 'ngx-english-only';
import { RemoveNewLineModule } from 'ngx-remove-new-line';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxEnglishOnlyModule,
    RemoveNewLineModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
