import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SignPageComponent } from './sign-page/sign-page.component';
import { CommonModule } from '@angular/common';

const MODULES = [
    RouterModule.forChild([{ path: '', component: SignPageComponent }]),
    CommonModule
]

const COMPONENTS = [
    SignPageComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [...MODULES],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureSignLoaderModule { }
