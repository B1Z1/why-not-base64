import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InitialLoadBase64Component } from 'src/app/initial-load-base64/initial-load-base64.component';

const routes: Routes = [
  { path: '', component: InitialLoadBase64Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InitialLoadBase64RouterModule {
}
