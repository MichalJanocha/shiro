(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-feature-layout-feature-layout-loader-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-notifications/layout-notifications.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-notifications/layout-notifications.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-item>\n        <ion-icon name=\"notifications-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-label>Hey! Welcome on Shiro.is, the best anime app!</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"notifications-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-text>Hey! Welcome on Shiro.is, the best anime app!</ion-text>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"notifications-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-text>Hey! Welcome on Shiro.is, the best anime app!</ion-text>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"notifications-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-text>Hey! Welcome on Shiro.is, the best anime app!</ion-text>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-page/feature-layout.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-page/feature-layout.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-split-pane when=\"md\" contentId=\"menu-content-id\" class=\"jk-menu-split\">\n  <ion-menu menuId=\"main-menu\" contentId=\"menu-content-id\" class=\"jk-menu-container\">\n    <div class=\"jk-menu-header\">\n      <ion-img src=\"assets/icon/shiro.png\"></ion-img>\n      <div class=\"jk-app-version\">\n        <p>1.0.0</p>\n      </div>\n    </div>\n    <ion-toolbar class=\"jk-main-nav ion-wrap\">\n      <ion-buttons class=\"ion-wrap\">\n        <ion-tab-button [routerLink]=\"['/page/home']\">\n          <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          <ion-label>Home</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/page/sign']\">\n          <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n          <ion-label>Sign in</ion-label>\n        </ion-tab-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-menu>\n\n  <ion-content id=\"menu-content-id\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\">\n            <ion-toolbar class=\"jk-app-content-header\">\n              <ion-buttons slot=\"start\">\n                <ion-menu-toggle menu=\"main-menu\">\n                  <ion-button color=\"primary\" size=\"large\" shape=\"round\">\n                    <ion-icon name=\"menu\"></ion-icon>\n                  </ion-button>\n                </ion-menu-toggle>\n                <ion-button>\n                  <ion-icon slot=\"start\" name=\"home\" color=\"primary\"></ion-icon>\n                  <label>Home</label>\n                </ion-button>\n              </ion-buttons>\n              <ion-buttons slot=\"secondary\">\n                <ion-button class=\"ion-text-right\" (click)=\"openUser($event)\">\n                  <ion-avatar slot=\"icon-only\" class=\"jk-user-avatar\">\n                    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                  </ion-avatar>\n                  <label>Sign in</label>\n                </ion-button>\n                <ion-button color=\"primary\" (click)=\"openNotifications($event)\">\n                  <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-router-outlet style=\"margin-top: 5rem;\"></ion-router-outlet>\n  </ion-content>\n</ion-split-pane>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-user/layout-user.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-user/layout-user.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-list>\n        <ion-item>\n          <ion-label>Login</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-button expand=\"block\">Sign in</ion-button>\n        </ion-item>\n      </ion-list>\n</ion-list>");

/***/ }),

/***/ "./src/app/features/feature-layout/feature-layout.loader.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/feature-layout/feature-layout.loader.module.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureLayoutLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureLayoutLoaderModule", function() { return FeatureLayoutLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layout_page_feature_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-page/feature-layout.component */ "./src/app/features/feature-layout/layout-page/feature-layout.component.ts");
/* harmony import */ var _feature_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-layout.routing.module */ "./src/app/features/feature-layout/feature-layout.routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_user_layout_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-user/layout-user.component */ "./src/app/features/feature-layout/layout-user/layout-user.component.ts");
/* harmony import */ var _layout_notifications_layout_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-notifications/layout-notifications.component */ "./src/app/features/feature-layout/layout-notifications/layout-notifications.component.ts");








const MODULES = [
    _feature_layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeatureLayoutRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
];
const COMPONENTS = [
    _layout_page_feature_layout_component__WEBPACK_IMPORTED_MODULE_2__["FeatureLayoutComponent"],
    _layout_user_layout_user_component__WEBPACK_IMPORTED_MODULE_6__["LayoutUserComponent"],
    _layout_notifications_layout_notifications_component__WEBPACK_IMPORTED_MODULE_7__["LayoutNotificationsComponent"]
];
let FeatureLayoutLoaderModule = class FeatureLayoutLoaderModule {
};
FeatureLayoutLoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...COMPONENTS],
        exports: [...COMPONENTS],
        imports: [...MODULES],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FeatureLayoutLoaderModule);



/***/ }),

/***/ "./src/app/features/feature-layout/feature-layout.routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/feature-layout/feature-layout.routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FeatureLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureLayoutRoutingModule", function() { return FeatureLayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_page_feature_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-page/feature-layout.component */ "./src/app/features/feature-layout/layout-page/feature-layout.component.ts");




const routes = [
    {
        path: 'page',
        component: _layout_page_feature_layout_component__WEBPACK_IMPORTED_MODULE_3__["FeatureLayoutComponent"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | features-feature-home-feature-home-loader-module */[__webpack_require__.e("default~features-feature-home-feature-home-loader-module~features-feature-watch-feature-watch-loader-module"), __webpack_require__.e("features-feature-home-feature-home-loader-module")]).then(__webpack_require__.bind(null, /*! @features/feature-home/feature-home.loader.module */ "./src/app/features/feature-home/feature-home.loader.module.ts")).then((module) => module.FeatureHomeLoaderModule),
                    },
                ],
            },
            {
                path: 'sign',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | features-feature-sign-feature-sign-loader-module */ "features-feature-sign-feature-sign-loader-module").then(__webpack_require__.bind(null, /*! @features/feature-sign/feature-sign.loader.module */ "./src/app/features/feature-sign/feature-sign.loader.module.ts")).then((module) => module.FeatureSignLoaderModule),
                    },
                ],
            },
            {
                path: 'watch/:slug',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | features-feature-watch-feature-watch-loader-module */[__webpack_require__.e("default~features-feature-home-feature-home-loader-module~features-feature-watch-feature-watch-loader-module"), __webpack_require__.e("features-feature-watch-feature-watch-loader-module")]).then(__webpack_require__.bind(null, /*! @features/feature-watch/feature-watch.loader.module */ "./src/app/features/feature-watch/feature-watch.loader.module.ts")).then((module) => module.FeatureWatchLoaderModule),
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
let FeatureLayoutRoutingModule = class FeatureLayoutRoutingModule {
};
FeatureLayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FeatureLayoutRoutingModule);



/***/ }),

/***/ "./src/app/features/feature-layout/layout-notifications/layout-notifications.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-notifications/layout-notifications.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtbGF5b3V0L2xheW91dC1ub3RpZmljYXRpb25zL2xheW91dC1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/feature-layout/layout-notifications/layout-notifications.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-notifications/layout-notifications.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LayoutNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNotificationsComponent", function() { return LayoutNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LayoutNotificationsComponent = class LayoutNotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutNotificationsComponent.ctorParameters = () => [];
LayoutNotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout-notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-notifications/layout-notifications.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout-notifications.component.scss */ "./src/app/features/feature-layout/layout-notifications/layout-notifications.component.scss")).default]
    })
], LayoutNotificationsComponent);



/***/ }),

/***/ "./src/app/features/feature-layout/layout-page/feature-layout.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-page/feature-layout.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtbGF5b3V0L2xheW91dC1wYWdlL2ZlYXR1cmUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/feature-layout/layout-page/feature-layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-page/feature-layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeatureLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureLayoutComponent", function() { return FeatureLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _layout_notifications_layout_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-notifications/layout-notifications.component */ "./src/app/features/feature-layout/layout-notifications/layout-notifications.component.ts");
/* harmony import */ var _layout_user_layout_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout-user/layout-user.component */ "./src/app/features/feature-layout/layout-user/layout-user.component.ts");





let FeatureLayoutComponent = class FeatureLayoutComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() {
    }
    openUser(ev) {
        this.popoverCtrl.create({
            component: _layout_user_layout_user_component__WEBPACK_IMPORTED_MODULE_4__["LayoutUserComponent"],
            animated: true,
            backdropDismiss: true,
            showBackdrop: true,
            event: ev,
            cssClass: 'jk-popover'
        }).then(pop => {
            pop.present();
        });
    }
    openNotifications(ev) {
        this.popoverCtrl.create({
            component: _layout_notifications_layout_notifications_component__WEBPACK_IMPORTED_MODULE_3__["LayoutNotificationsComponent"],
            animated: true,
            backdropDismiss: true,
            showBackdrop: true,
            event: ev,
            cssClass: 'jk-popover'
        }).then(pop => {
            pop.present();
        });
    }
};
FeatureLayoutComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
FeatureLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feature-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feature-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-page/feature-layout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feature-layout.component.scss */ "./src/app/features/feature-layout/layout-page/feature-layout.component.scss")).default]
    })
], FeatureLayoutComponent);



/***/ }),

/***/ "./src/app/features/feature-layout/layout-user/layout-user.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-user/layout-user.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtbGF5b3V0L2xheW91dC11c2VyL2xheW91dC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/feature-layout/layout-user/layout-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/feature-layout/layout-user/layout-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: LayoutUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutUserComponent", function() { return LayoutUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LayoutUserComponent = class LayoutUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutUserComponent.ctorParameters = () => [];
LayoutUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-layout/layout-user/layout-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout-user.component.scss */ "./src/app/features/feature-layout/layout-user/layout-user.component.scss")).default]
    })
], LayoutUserComponent);



/***/ })

}]);
//# sourceMappingURL=features-feature-layout-feature-layout-loader-module-es2015.js.map