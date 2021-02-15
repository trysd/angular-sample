import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'test/apple', pathMatch: 'full'
  },
  {
    path: 'test/apple', loadChildren: () =>
      import('src/app/modules/test-apple/test-apple.module').then(m => m.TestAppleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
