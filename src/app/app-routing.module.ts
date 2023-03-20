import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'initial-load', loadChildren: () => import('src/app/initial-load/initial-load.module').then(m => m.InitialLoadModule) },
  { path: 'initial-load-base-64', loadChildren: () => import('src/app/initial-load-base64/initial-load-base64.module').then(m => m.InitialLoadBase64Module) },
  { path: 'load-on-action', loadChildren: () => import('src/app/load-on-action/load-on-action.module').then(m => m.LoadOnActionModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
