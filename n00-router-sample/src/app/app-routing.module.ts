import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample1Component } from 'src/app/sample1/sample1.component';
import { Sample2Component } from 'src/app/sample2/sample2.component';

const routes: Routes = [
  { path: 'sample1',
    component: Sample1Component
  },
  { path: 'sample2',
    component: Sample2Component
  },
  {
    path: 'sample3',
    loadChildren: () =>
        import('src/app/sample3/sample3.module').then(m => m.Sample3Module)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
