import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample1RoutingModule } from './sample1-routing.module';
import { Sample1Component } from 'src/app/sample1/sample1.component';
import { Con1Component } from 'src/app/container/con1/con1.component';
import { Con2Component } from 'src/app/container/con2/con2.component';

@NgModule({
  declarations: [
    Sample1Component,
    Con1Component,
    Con2Component
  ],
  imports: [
    CommonModule,
    Sample1RoutingModule
  ]
})
export class Sample1Module { }
