import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InitialLoadComponent } from 'src/app/initial-load/initial-load.component';

const routes: Routes = [
  { path: '', component: InitialLoadComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InitialLoadRouterModule {
}
