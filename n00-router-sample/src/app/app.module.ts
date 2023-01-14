import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Sample1Module } from 'src/app/sample1/sample1.module';
import { Sample2Module } from 'src/app/sample2/sample2.module';

import { HeaderComponent } from 'src/app/container/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    Sample1Module,
    Sample2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
