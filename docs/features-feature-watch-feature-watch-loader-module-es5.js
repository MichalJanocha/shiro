(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-feature-watch-feature-watch-loader-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-page/watch-page.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-page/watch-page.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeatureWatchWatchPageWatchPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n  <ion-row>\n    <ion-col size-xs=\"7\">\n      <div class=\"TEMP-PLAYER\">\n\n      </div>\n    </ion-col>\n    <ion-col size-xs=\"5\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\">\n            <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"primary\" value=\"servers\" class=\"shiro-watch-tabs\">\n              <ion-segment-button value=\"servers\">\n                <ion-label>Servers</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"episodes\">\n                <ion-label>Episodes</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"video\">\n                <ion-label>Video</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"other\">\n                <ion-label>Other</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n          <ion-col size-xs=\"12\" *ngIf=\"currentSelection === 'servers'\">\n            <app-watch-tab-servers></app-watch-tab-servers>\n          </ion-col>\n          <ion-col size-xs=\"12\" *ngIf=\"currentSelection === 'episodes'\">\n            <app-watch-tab-episodes></app-watch-tab-episodes>\n          </ion-col>\n          <ion-col size-xs=\"12\" *ngIf=\"currentSelection === 'video'\">\n            <app-watch-tab-video></app-watch-tab-video>\n          </ion-col>\n          <ion-col size-xs=\"12\" *ngIf=\"currentSelection === 'other'\">\n            <app-watch-tab-other></app-watch-tab-other>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeatureWatchWatchTabEpisodesWatchTabEpisodesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button shape=\"round\" fill=\"outline\">1</ion-button>\n<ion-button shape=\"round\" fill=\"outline\">2</ion-button>\n<ion-button shape=\"round\" fill=\"outline\">3</ion-button>\n<ion-button shape=\"round\" fill=\"outline\">4</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeatureWatchWatchTabOtherWatchTabOtherComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  watch-tab-other works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeatureWatchWatchTabServersWatchTabServersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button fill=\"outline\">Server 1</ion-button>\n<ion-button fill=\"outline\">Server 2</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFeatureWatchWatchTabVideoWatchTabVideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  watch-tab-video works!\n</p>\n";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/feature-watch.loader.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/features/feature-watch/feature-watch.loader.module.ts ***!
      \***********************************************************************/

    /*! exports provided: FeatureWatchLoaderModule */

    /***/
    function srcAppFeaturesFeatureWatchFeatureWatchLoaderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureWatchLoaderModule", function () {
        return FeatureWatchLoaderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _watch_page_watch_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./watch-page/watch-page.component */
      "./src/app/features/feature-watch/watch-page/watch-page.component.ts");
      /* harmony import */


      var _watch_tab_episodes_watch_tab_episodes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./watch-tab-episodes/watch-tab-episodes.component */
      "./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.ts");
      /* harmony import */


      var _watch_tab_other_watch_tab_other_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./watch-tab-other/watch-tab-other.component */
      "./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.ts");
      /* harmony import */


      var _watch_tab_servers_watch_tab_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./watch-tab-servers/watch-tab-servers.component */
      "./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.ts");
      /* harmony import */


      var _watch_tab_video_watch_tab_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./watch-tab-video/watch-tab-video.component */
      "./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.ts");

      var MODULES = [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _watch_page_watch_page_component__WEBPACK_IMPORTED_MODULE_4__["WatchPageComponent"]
      }]), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
      var COMPONENTS = [_watch_page_watch_page_component__WEBPACK_IMPORTED_MODULE_4__["WatchPageComponent"], _watch_tab_episodes_watch_tab_episodes_component__WEBPACK_IMPORTED_MODULE_5__["WatchTabEpisodesComponent"], _watch_tab_other_watch_tab_other_component__WEBPACK_IMPORTED_MODULE_6__["WatchTabOtherComponent"], _watch_tab_servers_watch_tab_servers_component__WEBPACK_IMPORTED_MODULE_7__["WatchTabServersComponent"], _watch_tab_video_watch_tab_video_component__WEBPACK_IMPORTED_MODULE_8__["WatchTabVideoComponent"]];

      var FeatureWatchLoaderModule = function FeatureWatchLoaderModule() {
        _classCallCheck(this, FeatureWatchLoaderModule);
      };

      FeatureWatchLoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [].concat(COMPONENTS),
        exports: [].concat(COMPONENTS),
        imports: [].concat(MODULES),
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], FeatureWatchLoaderModule);
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-page/watch-page.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-page/watch-page.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturesFeatureWatchWatchPageWatchPageComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtd2F0Y2gvd2F0Y2gtcGFnZS93YXRjaC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-page/watch-page.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-page/watch-page.component.ts ***!
      \***************************************************************************/

    /*! exports provided: WatchPageComponent */

    /***/
    function srcAppFeaturesFeatureWatchWatchPageWatchPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchPageComponent", function () {
        return WatchPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_data_access_services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/data-access/services/anime.service */
      "./src/app/data-access/services/anime.service.ts");

      var WatchPageComponent = /*#__PURE__*/function () {
        function WatchPageComponent(router, animeServ) {
          _classCallCheck(this, WatchPageComponent);

          this.router = router;
          this.animeServ = animeServ;
          this.currentSelection = 'servers';
        }

        _createClass(WatchPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var animeSlug = this.router.snapshot.paramMap.get("slug");
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            this.currentSelection = event.detail.value;
          }
        }]);

        return WatchPageComponent;
      }();

      WatchPageComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_data_access_services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"]
        }];
      };

      WatchPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./watch-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-page/watch-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./watch-page.component.scss */
        "./src/app/features/feature-watch/watch-page/watch-page.component.scss"))["default"]]
      })], WatchPageComponent);
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabEpisodesWatchTabEpisodesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtd2F0Y2gvd2F0Y2gtdGFiLWVwaXNvZGVzL3dhdGNoLXRhYi1lcGlzb2Rlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: WatchTabEpisodesComponent */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabEpisodesWatchTabEpisodesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchTabEpisodesComponent", function () {
        return WatchTabEpisodesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WatchTabEpisodesComponent = /*#__PURE__*/function () {
        function WatchTabEpisodesComponent() {
          _classCallCheck(this, WatchTabEpisodesComponent);
        }

        _createClass(WatchTabEpisodesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WatchTabEpisodesComponent;
      }();

      WatchTabEpisodesComponent.ctorParameters = function () {
        return [];
      };

      WatchTabEpisodesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-tab-episodes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./watch-tab-episodes.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./watch-tab-episodes.component.scss */
        "./src/app/features/feature-watch/watch-tab-episodes/watch-tab-episodes.component.scss"))["default"]]
      })], WatchTabEpisodesComponent);
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabOtherWatchTabOtherComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtd2F0Y2gvd2F0Y2gtdGFiLW90aGVyL3dhdGNoLXRhYi1vdGhlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: WatchTabOtherComponent */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabOtherWatchTabOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchTabOtherComponent", function () {
        return WatchTabOtherComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WatchTabOtherComponent = /*#__PURE__*/function () {
        function WatchTabOtherComponent() {
          _classCallCheck(this, WatchTabOtherComponent);
        }

        _createClass(WatchTabOtherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WatchTabOtherComponent;
      }();

      WatchTabOtherComponent.ctorParameters = function () {
        return [];
      };

      WatchTabOtherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-tab-other',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./watch-tab-other.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./watch-tab-other.component.scss */
        "./src/app/features/feature-watch/watch-tab-other/watch-tab-other.component.scss"))["default"]]
      })], WatchTabOtherComponent);
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabServersWatchTabServersComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtd2F0Y2gvd2F0Y2gtdGFiLXNlcnZlcnMvd2F0Y2gtdGFiLXNlcnZlcnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: WatchTabServersComponent */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabServersWatchTabServersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchTabServersComponent", function () {
        return WatchTabServersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WatchTabServersComponent = /*#__PURE__*/function () {
        function WatchTabServersComponent() {
          _classCallCheck(this, WatchTabServersComponent);
        }

        _createClass(WatchTabServersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WatchTabServersComponent;
      }();

      WatchTabServersComponent.ctorParameters = function () {
        return [];
      };

      WatchTabServersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-tab-servers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./watch-tab-servers.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./watch-tab-servers.component.scss */
        "./src/app/features/feature-watch/watch-tab-servers/watch-tab-servers.component.scss"))["default"]]
      })], WatchTabServersComponent);
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabVideoWatchTabVideoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmUtd2F0Y2gvd2F0Y2gtdGFiLXZpZGVvL3dhdGNoLXRhYi12aWRlby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: WatchTabVideoComponent */

    /***/
    function srcAppFeaturesFeatureWatchWatchTabVideoWatchTabVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchTabVideoComponent", function () {
        return WatchTabVideoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WatchTabVideoComponent = /*#__PURE__*/function () {
        function WatchTabVideoComponent() {
          _classCallCheck(this, WatchTabVideoComponent);
        }

        _createClass(WatchTabVideoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WatchTabVideoComponent;
      }();

      WatchTabVideoComponent.ctorParameters = function () {
        return [];
      };

      WatchTabVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-tab-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./watch-tab-video.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./watch-tab-video.component.scss */
        "./src/app/features/feature-watch/watch-tab-video/watch-tab-video.component.scss"))["default"]]
      })], WatchTabVideoComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-feature-watch-feature-watch-loader-module-es5.js.map