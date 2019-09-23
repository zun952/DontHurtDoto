(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab-setting-tab-setting-module"],{

/***/ "./src/app/pages/tab-setting/tab-setting.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-setting/tab-setting.module.ts ***!
  \*********************************************************/
/*! exports provided: TabSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingPageModule", function() { return TabSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-setting.page */ "./src/app/pages/tab-setting/tab-setting.page.ts");







var routes = [
    {
        path: '',
        children: [
            { path: '', component: _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"] }
        ]
    }
];
var TabSettingPageModule = /** @class */ (function () {
    function TabSettingPageModule() {
    }
    TabSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"]]
        })
    ], TabSettingPageModule);
    return TabSettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab-setting/tab-setting.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-setting/tab-setting.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">설정</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <ion-card-title>계정정보</ion-card-title>\n        </ion-col>\n        <ion-col style=\"text-align: right\">\n          <ion-button (click)=\"editaccount()\" [routerLink]=\"['/edit-account']\" size=\"small\">수정</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    \n    <ion-card-content class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">이메일</ion-label>\n        <ion-text color=\"dark\">gofire99@naver.com</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">비밀번호</ion-label>\n        <ion-text color=\"dark\">***********</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">닉네임</ion-label>\n        <ion-text color=\"dark\">ㅎㅎㅎㅎ</ion-text>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-row>\n    <ion-col style=\"text-align: center\">\n      <ion-button (click)=\"editpet()\">반려동물 정보 관리</ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: center\">\n      <ion-button (click)=\"logout()\" color=\"danger\">로그아웃</ion-button>\n      <!--ion-button [routerLink]=\"['/login']\" color=\"danger\">로그아웃</ion-button-->\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col style=\"text-align: center\">\n      <ion-button color=\"danger\">회원 탈퇴</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tab-setting/tab-setting.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-setting/tab-setting.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYi1zZXR0aW5nL3RhYi1zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tab-setting/tab-setting.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tab-setting/tab-setting.page.ts ***!
  \*******************************************************/
/*! exports provided: TabSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingPage", function() { return TabSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabSettingPage = /** @class */ (function () {
    function TabSettingPage(router) {
        this.router = router;
    }
    TabSettingPage.prototype.ngOnInit = function () {
    };
    TabSettingPage.prototype.editpet = function () {
        this.router.navigate(['/edit-pet']);
    };
    TabSettingPage.prototype.editaccount = function () {
        this.router.navigate(['/edit-account']);
    };
    TabSettingPage.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    TabSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-setting',
            template: __webpack_require__(/*! ./tab-setting.page.html */ "./src/app/pages/tab-setting/tab-setting.page.html"),
            styles: [__webpack_require__(/*! ./tab-setting.page.scss */ "./src/app/pages/tab-setting/tab-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabSettingPage);
    return TabSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tab-setting-tab-setting-module.js.map