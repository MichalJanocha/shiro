(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-feature-sign-feature-sign-loader-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-sign/sign-page/sign-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-sign/sign-page/sign-page.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n    <ion-row>\n        <ion-col size-xs=\"12\">\n            <ion-card>\n                <ion-card-header>\n                    <ion-card-subtitle>Home Page</ion-card-subtitle>\n                    <ion-card-title>is there</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    Content of home\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./src/app/features/feature-sign/feature-sign.loader.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/feature-sign/feature-sign.loader.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeatureSignLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureSignLoaderModule", function() { return FeatureSignLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-page/sign-page.component */ "./src/app/features/feature-sign/sign-page/sign-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const MODULES = [
    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__["SignPageComponent"] }]),
    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
];
const COMPONENTS = [
    _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__["SignPageComponent"]
];
let FeatureSignLoaderModule = class FeatureSignLoaderModule {
};
FeatureSignLoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...COMPONENTS],
        exports: [...COMPONENTS],
        imports: [...MODULES],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FeatureSignLoaderModule);



/***/ }),

/***/ "./src/app/features/feature-sign/sign-page/sign-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/feature-sign/sign-page/sign-page.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtc2lnbi9zaWduLXBhZ2Uvc2lnbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/feature-sign/sign-page/sign-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/feature-sign/sign-page/sign-page.component.ts ***!
  \************************************************************************/
/*! exports provided: SignPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignPageComponent", function() { return SignPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SignPageComponent = class SignPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignPageComponent.ctorParameters = () => [];
SignPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-sign/sign-page/sign-page.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-page.component.scss */ "./src/app/features/feature-sign/sign-page/sign-page.component.scss")).default]
    })
], SignPageComponent);



/***/ })

}]);
//# sourceMappingURL=features-feature-sign-feature-sign-loader-module-es2015.js.map