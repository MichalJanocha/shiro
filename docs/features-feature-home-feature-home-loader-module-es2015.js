(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-feature-home-feature-home-loader-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-row>\n      <ion-col size-xs=\"12\">\n          <ion-toolbar>\n              <ion-buttons slot=\"secondary\">\n                  <ion-button size=\"large\" shape=\"round\">\n                      <ion-icon slot=\"icon-only\" name=\"return-up-forward-outline\"></ion-icon>\n                  </ion-button>\n              </ion-buttons>\n              <ion-title>Latest Anime</ion-title>\n          </ion-toolbar>\n      </ion-col>\n      <ion-col size-xs=\"4\" size-lg=\"3\" size-xl=\"2\" *ngFor=\"let anime of fewAnimes$ | async\">\n          <ion-card class=\"jk-anime-card\" [routerLink]=\"['/page/watch/'+anime.slug]\" >\n              <div class=\"jk-anime-card-header\">\n                  <ion-img src=\"https://static.posters.cz/image/750/plakaty/death-note-collage-i28406.jpg\"></ion-img>\n\n                  <div class=\"jk-anime-card-comments\">\n                      <ion-icon name=\"chatbox\"></ion-icon>\n                      0\n                  </div >\n                  <div class=\"jk-anime-card-views\">\n                      <ion-icon name=\"eye-outline\"></ion-icon>\n                      {{anime.views}}\n                  </div>\n              </div>\n              <ion-card-content>\n                  <ion-card-title class=\"ion-text-nowrap\">{{anime.name}}</ion-card-title>\n                  <p>\n                      <ion-icon name=\"time-outline\"></ion-icon>\n                      {{anime.creation}}\n                  </p>\n              </ion-card-content>\n          </ion-card>\n      </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-page/home-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-page/home-page.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n    <ion-grid>\n        <ion-row>\n            <ion-col size-xs=\"12\">\n                <app-home-newest-anime [fewAnimes$]=\"fewAnimes$\"></app-home-newest-anime>\n            </ion-col>\n            <ion-col size-xs=\"12\" size-md=\"6\" *ngIf=\"allAnimes$\">\n                <app-home-random-anime [allAnimes$]=\"allAnimes$\"></app-home-random-anime>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-random-anime/home-random-anime.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-random-anime/home-random-anime.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-row>\n    <ion-col size-xs=\"12\" *ngIf=\"currentAnime\">\n      <ion-toolbar>\n          <ion-buttons slot=\"secondary\">\n              <ion-button size=\"large\" shape=\"round\" (click)=\"getRandomAnime()\">\n                  <ion-icon slot=\"icon-only\" color=\"primary\" name=\"shuffle-outline\"></ion-icon>\n              </ion-button>\n          </ion-buttons>\n          <ion-title>Random Anime</ion-title>\n      </ion-toolbar>\n    </ion-col>\n    <ion-col size-xs=\"12\" class=\"shiro-random-col\">\n      <div class=\"shiro-random-card\">\n        <div class=\"shiro-card-header\">\n          <img src=\"https://static.posters.cz/image/750/plakaty/death-note-collage-i28406.jpg\" class=\"shiro-img\"/>\n        </div>\n        <div class=\"shiro-card-content\">\n          <h4>{{currentAnime?.name}}</h4>\n          <div class=\"shiro-card-genres\">\n            <ion-badge>Anime</ion-badge>\n            <ion-badge>Dark</ion-badge>\n          </div>\n          <p>{{currentAnime?.description}}</p>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./src/app/features/feature-home/feature-home.loader.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/feature-home/feature-home.loader.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeatureHomeLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureHomeLoaderModule", function() { return FeatureHomeLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/features/feature-home/home-page/home-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_newest_anime_home_newest_anime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-newest-anime/home-newest-anime.component */ "./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.ts");
/* harmony import */ var _home_random_anime_home_random_anime_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-random-anime/home-random-anime.component */ "./src/app/features/feature-home/home-random-anime/home-random-anime.component.ts");







const MODULES = [
    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] }]),
    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
];
const COMPONENTS = [
    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
    _home_newest_anime_home_newest_anime_component__WEBPACK_IMPORTED_MODULE_5__["HomeNewestAnimeComponent"],
    _home_random_anime_home_random_anime_component__WEBPACK_IMPORTED_MODULE_6__["HomeRandomAnimeComponent"]
];
let FeatureHomeLoaderModule = class FeatureHomeLoaderModule {
};
FeatureHomeLoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...COMPONENTS],
        exports: [...COMPONENTS],
        imports: [...MODULES],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FeatureHomeLoaderModule);



/***/ }),

/***/ "./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtaG9tZS9ob21lLW5ld2VzdC1hbmltZS9ob21lLW5ld2VzdC1hbmltZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HomeNewestAnimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNewestAnimeComponent", function() { return HomeNewestAnimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeNewestAnimeComponent = class HomeNewestAnimeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeNewestAnimeComponent.ctorParameters = () => [];
HomeNewestAnimeComponent.propDecorators = {
    fewAnimes$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HomeNewestAnimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-newest-anime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-newest-anime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-newest-anime.component.scss */ "./src/app/features/feature-home/home-newest-anime/home-newest-anime.component.scss")).default]
    })
], HomeNewestAnimeComponent);



/***/ }),

/***/ "./src/app/features/feature-home/home-page/home-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/feature-home/home-page/home-page.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtaG9tZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/feature-home/home-page/home-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/feature-home/home-page/home-page.component.ts ***!
  \************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_data_access_services_anime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/data-access/services/anime.service */ "./src/app/data-access/services/anime.service.ts");



let HomePageComponent = class HomePageComponent {
    constructor(animeServ) {
        this.animeServ = animeServ;
    }
    ngOnInit() {
        this.allAnimes$ = this.animeServ.fetchAllAnime();
        this.fewAnimes$ = this.animeServ.fetch20Animes();
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _app_data_access_services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"] }
];
HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-page/home-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-page.component.scss */ "./src/app/features/feature-home/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/features/feature-home/home-random-anime/home-random-anime.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/features/feature-home/home-random-anime/home-random-anime.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtaG9tZS9ob21lLXJhbmRvbS1hbmltZS9ob21lLXJhbmRvbS1hbmltZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/features/feature-home/home-random-anime/home-random-anime.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/feature-home/home-random-anime/home-random-anime.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HomeRandomAnimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRandomAnimeComponent", function() { return HomeRandomAnimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeRandomAnimeComponent = class HomeRandomAnimeComponent {
    constructor() { }
    ngOnInit() {
        this.allAnimes$.subscribe(anime => {
            this.allAnimes = anime;
            this.getRandomAnime();
        });
    }
    getRandomAnime() {
        this.currentAnime = this.allAnimes[Math.floor(Math.random() * this.allAnimes.length)];
    }
};
HomeRandomAnimeComponent.ctorParameters = () => [];
HomeRandomAnimeComponent.propDecorators = {
    allAnimes$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HomeRandomAnimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-random-anime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-random-anime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-home/home-random-anime/home-random-anime.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-random-anime.component.scss */ "./src/app/features/feature-home/home-random-anime/home-random-anime.component.scss")).default]
    })
], HomeRandomAnimeComponent);



/***/ })

}]);
//# sourceMappingURL=features-feature-home-feature-home-loader-module-es2015.js.map