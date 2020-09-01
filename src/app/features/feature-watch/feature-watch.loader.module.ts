import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WatchPageComponent } from './watch-page/watch-page.component';
import { WatchTabEpisodesComponent } from './watch-tab-episodes/watch-tab-episodes.component';
import { WatchTabOtherComponent } from './watch-tab-other/watch-tab-other.component';
import { WatchTabServersComponent } from './watch-tab-servers/watch-tab-servers.component';
import { WatchTabVideoComponent } from './watch-tab-video/watch-tab-video.component';


const MODULES = [
    RouterModule.forChild([{ path: '', component: WatchPageComponent }]),
    CommonModule
]

const COMPONENTS = [
    WatchPageComponent,
    WatchTabEpisodesComponent,
    WatchTabOtherComponent,
    WatchTabServersComponent,
    WatchTabVideoComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [...MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureWatchLoaderModule { }
