import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeNewestAnimeComponent } from './home-newest-anime/home-newest-anime.component';
import { HomeRandomAnimeComponent } from './home-random-anime/home-random-anime.component';

const MODULES = [
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
    CommonModule
]

const COMPONENTS = [
    HomePageComponent,
    HomeNewestAnimeComponent,
    HomeRandomAnimeComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [...MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureHomeLoaderModule { }
