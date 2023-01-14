import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample2RoutingModule } from './sample2-routing.module';
import { Sample2Component } from 'src/app/sample2/sample2.component';
import { Con3Component } from 'src/app/container/con3/con3.component';
import { Con4Component } from 'src/app/container/con4/con4.component';

@NgModule({
  declarations: [
    Sample2Component,
    Con3Component,
    Con4Component
  ],
  imports: [
    CommonModule,
    Sample2RoutingModule
  ]
})
export class Sample2Module { }
