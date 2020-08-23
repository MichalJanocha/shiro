import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FeatureLayoutComponent } from './layout-page/feature-layout.component';
import {FeatureLayoutRoutingModule} from './feature-layout.routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutUserComponent } from './layout-user/layout-user.component';
import { LayoutNotificationsComponent } from './layout-notifications/layout-notifications.component';

const MODULES = [
    FeatureLayoutRoutingModule, IonicModule, CommonModule
]

const COMPONENTS = [
    FeatureLayoutComponent,
    LayoutUserComponent,
    LayoutNotificationsComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [...MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureLayoutLoaderModule { }
