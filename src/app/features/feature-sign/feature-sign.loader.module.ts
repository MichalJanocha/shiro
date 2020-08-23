import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SignPageComponent } from './sign-page/sign-page.component';

const MODULES = [
    RouterModule.forChild([{ path: '', component: SignPageComponent }]),
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
