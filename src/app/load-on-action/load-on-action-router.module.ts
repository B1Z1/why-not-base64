import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoadOnActionComponent } from 'src/app/load-on-action/load-on-action.component';

const routes: Routes = [
  { path: '', component: LoadOnActionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoadOnActionRouterModule {
}
