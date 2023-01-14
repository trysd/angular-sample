import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample1Component } from 'src/app/sample1/sample1.component';
import { Con1Component } from 'src/app/container/con1/con1.component';
import { Con2Component } from 'src/app/container/con2/con2.component';

const routes: Routes = [
    { path: '', component: Sample1Component,
        children: [
            { path: 'con1', component: Con1Component },
            { path: 'con2', component: Con2Component }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample1RoutingModule { }
