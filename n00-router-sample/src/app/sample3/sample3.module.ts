import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample3RoutingModule } from './sample3-routing.module';
import { Sample3Component } from 'src/app/sample3/sample3.component';
import { Con5Component } from 'src/app/container/con5/con5.component';
import { Con6Component } from 'src/app/container/con6/con6.component';

@NgModule({
  declarations: [
    Sample3Component,
    Con5Component,
    Con6Component
  ],
  imports: [
    CommonModule,
    Sample3RoutingModule
  ]
})
export class Sample3Module { }
