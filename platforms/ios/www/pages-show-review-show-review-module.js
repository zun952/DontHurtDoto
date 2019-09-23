(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-show-review-show-review-module"],{

/***/ "./src/app/pages/show-review/show-review.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show-review/show-review.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReviewPageModule", function() { return ShowReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-review.page */ "./src/app/pages/show-review/show-review.page.ts");







var routes = [
    {
        path: '',
        component: _show_review_page__WEBPACK_IMPORTED_MODULE_6__["ShowReviewPage"]
    }
];
var ShowReviewPageModule = /** @class */ (function () {
    function ShowReviewPageModule() {
    }
    ShowReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_show_review_page__WEBPACK_IMPORTED_MODULE_6__["ShowReviewPage"]]
        })
    ], ShowReviewPageModule);
    return ShowReviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/show-review/show-review.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/show-review/show-review.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title class=\"ion-text-center\">기록 보기</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/show-review/show-review.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/show-review/show-review.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3ctcmV2aWV3L3Nob3ctcmV2aWV3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/show-review/show-review.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/show-review/show-review.page.ts ***!
  \*******************************************************/
/*! exports provided: ShowReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReviewPage", function() { return ShowReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowReviewPage = /** @class */ (function () {
    function ShowReviewPage() {
    }
    ShowReviewPage.prototype.ngOnInit = function () {
    };
    ShowReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-review',
            template: __webpack_require__(/*! ./show-review.page.html */ "./src/app/pages/show-review/show-review.page.html"),
            styles: [__webpack_require__(/*! ./show-review.page.scss */ "./src/app/pages/show-review/show-review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowReviewPage);
    return ShowReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-show-review-show-review-module.js.map