import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAppleComponent } from 'src/app/components/test-apple/test-apple.component';

const routes: Routes = [
  { path: '', component: TestAppleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppleRoutingModule { }
