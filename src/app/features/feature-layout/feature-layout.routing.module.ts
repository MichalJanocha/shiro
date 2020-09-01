import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureLayoutComponent } from './layout-page/feature-layout.component';

const routes: Routes = [
  {
    path: 'page',
    component: FeatureLayoutComponent,
    children: [
        {
            path: 'home',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('@features/feature-home/feature-home.loader.module').then(
                    (module) => module.FeatureHomeLoaderModule,
                  ),
              },
            ],
        },
        {
          path: 'sign',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('@features/feature-sign/feature-sign.loader.module').then(
                  (module) => module.FeatureSignLoaderModule,
                ),
            },
          ],
        },
        {
          path: 'watch/:slug',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('@features/feature-watch/feature-watch.loader.module').then(
                  (module) => module.FeatureWatchLoaderModule,
                ),
            },
          ],
        },
    ]
  },
  {
    path: '**',
    redirectTo: 'page/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureLayoutRoutingModule { }