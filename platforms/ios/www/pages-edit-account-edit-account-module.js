(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-account-edit-account-module"],{

/***/ "./src/app/pages/edit-account/edit-account.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.module.ts ***!
  \***********************************************************/
/*! exports provided: EditAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageModule", function() { return EditAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-account.page */ "./src/app/pages/edit-account/edit-account.page.ts");







var routes = [
    {
        path: '',
        component: _edit_account_page__WEBPACK_IMPORTED_MODULE_6__["EditAccountPage"]
    }
];
var EditAccountPageModule = /** @class */ (function () {
    function EditAccountPageModule() {
    }
    EditAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_6__["EditAccountPage"]]
        })
    ], EditAccountPageModule);
    return EditAccountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">계정정보 수정</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <ion-card-title>계정정보</ion-card-title>\n        </ion-col>\n        <ion-col style=\"text-align: right\">\n          <!--ion-button [routerLink]=\"['']\" size=\"small\">수정 완료</ion-button-->\n          <ion-button size=\"small\" (click)=goBack()>수정 완료</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    \n    <ion-card-content class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">이메일</ion-label>\n        <ion-input>gofire99@naver.com</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">비밀번호</ion-label>\n        <ion-input>***********</ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label position=\"stacked\">닉네임</ion-label>\n        <ion-input>ㅎㅎㅎㅎ</ion-input>\n      </ion-item>\n      <!--ion-row>\n        <ion-col style=\"text-align: center\">\n          <ion-button>수정</ion-button>\n        </ion-col>\n      </ion-row-->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  z-index: 100; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW5kb25nbWluL2RvbnRodXJ0ZG90by9zcmMvYXBwL3BhZ2VzL2VkaXQtYWNjb3VudC9lZGl0LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LWFjY291bnQvZWRpdC1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gICAgei1pbmRleDogMTAwO1xufVxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.ts ***!
  \*********************************************************/
/*! exports provided: EditAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPage", function() { return EditAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EditAccountPage = /** @class */ (function () {
    function EditAccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditAccountPage.prototype.ngOnInit = function () {
    };
    EditAccountPage.prototype.goBack = function () { this.navCtrl.pop(); };
    EditAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__(/*! ./edit-account.page.html */ "./src/app/pages/edit-account/edit-account.page.html"),
            styles: [__webpack_require__(/*! ./edit-account.page.scss */ "./src/app/pages/edit-account/edit-account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EditAccountPage);
    return EditAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-account-edit-account-module.js.map