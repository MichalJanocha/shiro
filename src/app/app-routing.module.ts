import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FeatureLayoutComponent } from './features/feature-layout/layout-page/feature-layout.component';

const routes: Routes = [
  {
    path: '',
    // component: FeatureLayoutComponent,
    loadChildren: () => import('@features/feature-layout/feature-layout.loader.module').then( m => m.FeatureLayoutLoaderModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
