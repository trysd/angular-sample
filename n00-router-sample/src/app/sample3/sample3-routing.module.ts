import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample3Component } from 'src/app/sample3/sample3.component';
import { Con5Component } from 'src/app/container/con5/con5.component';
import { Con6Component } from 'src/app/container/con6/con6.component';

const routes: Routes = [
    { path: '', component: Sample3Component,
        children: [
            { path: 'con5', component: Con5Component },
            { path: 'con6', component: Con6Component }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample3RoutingModule { }
