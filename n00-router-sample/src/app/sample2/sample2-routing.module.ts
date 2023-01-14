import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample2Component } from 'src/app/sample2/sample2.component';
import { Con3Component } from 'src/app/container/con3/con3.component';
import { Con4Component } from 'src/app/container/con4/con4.component';

const routes: Routes = [
    { path: 'sample2', component: Sample2Component,
        children: [
            { path: 'con3', component: Con3Component },
            { path: 'con4', component: Con4Component }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample2RoutingModule { }
