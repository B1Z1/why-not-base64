import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialLoadComponent } from './initial-load.component';
import { InitialLoadRouterModule } from 'src/app/initial-load/initial-load-router.module';


@NgModule({
  declarations: [
    InitialLoadComponent
  ],
  imports: [
    CommonModule,
    InitialLoadRouterModule
  ]
})
export class InitialLoadModule {
}
