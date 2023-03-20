import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialLoadBase64Component } from 'src/app/initial-load-base64/initial-load-base64.component';
import { InitialLoadBase64RouterModule } from 'src/app/initial-load-base64/initial-load-base64-router.module';


@NgModule({
  declarations: [
    InitialLoadBase64Component
  ],
  imports: [
    CommonModule,
    InitialLoadBase64RouterModule
  ]
})
export class InitialLoadBase64Module {
}
