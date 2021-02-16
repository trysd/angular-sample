import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPushComponent } from './components/functional/web-push/web-push.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'test/apple', pathMatch: 'full'
  },
  {
    path: 'test/apple', loadChildren: () =>
      import('src/app/modules/test-apple/test-apple.module').then(m => m.TestAppleModule)
  },
  {
    path: 'webpush', component: WebPushComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
