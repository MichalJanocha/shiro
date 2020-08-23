import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FeatureLayoutComponent } from './layout-page/feature-layout.component';
import { RouterModule } from '@angular/router';
import {FeatureLayoutRoutingModule} from './feature-layout.routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const MODULES = [
    FeatureLayoutRoutingModule, IonicModule, CommonModule
]

const COMPONENTS = [
    FeatureLayoutComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [...MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureLayoutLoaderModule { }
