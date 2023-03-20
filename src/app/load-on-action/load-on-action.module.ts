import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOnActionImagesComponent } from 'src/app/load-on-action/load-on-action-images/load-on-action-images.component';
import { LoadOnActionBase64Component } from 'src/app/load-on-action/load-on-action-base64/load-on-action-base64.component';
import { LoadOnActionComponent } from 'src/app/load-on-action/load-on-action.component';
import { LoadOnActionRouterModule } from 'src/app/load-on-action/load-on-action-router.module';


@NgModule({
  declarations: [
    LoadOnActionComponent,
    LoadOnActionBase64Component,
    LoadOnActionImagesComponent
  ],
  imports: [
    CommonModule,
    LoadOnActionRouterModule
  ]
})
export class LoadOnActionModule {
}
