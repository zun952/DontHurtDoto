(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab-map-tab-map-module"],{

/***/ "./src/app/pages/tab-map/tab-map.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tab-map/tab-map.module.ts ***!
  \*************************************************/
/*! exports provided: TabMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapPageModule", function() { return TabMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-map.page */ "./src/app/pages/tab-map/tab-map.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");









var TabMapPageModule = /** @class */ (function () {
    function TabMapPageModule() {
    }
    TabMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab_map_page__WEBPACK_IMPORTED_MODULE_6__["TabMapPage"] }])
            ],
            declarations: [_tab_map_page__WEBPACK_IMPORTED_MODULE_6__["TabMapPage"]],
            providers: [
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
                _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]
            ]
        })
    ], TabMapPageModule);
    return TabMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab-map/tab-map.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/tab-map/tab-map.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>동물병원 지도</ion-title>\n    <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\" size=\"small\">\n      <ion-icon slot=\"start\" name=\"locate\" ></ion-icon>\n      Activate\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"../../assets/icon/center_marker.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-searchbar animated spellcheck=\"false\" type=\"text\"></ion-searchbar>\n    <div id=\"address\">\n      <span>{{address}}</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/tab-map/tab-map.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tab-map/tab-map.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red; }\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold; }\n\n#map {\n  width: 100%;\n  height: 70vh; }\n\n.map-wrapper {\n  position: relative; }\n\n.map-wrapper #map_center {\n    position: absolute;\n    z-index: 99;\n    height: 40px;\n    width: 40px;\n    top: 50%;\n    left: 50%;\n    margin-left: -21px;\n    margin-top: -41px; }\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW5kb25nbWluL2RvbnRodXJ0ZG90by9zcmMvYXBwL3BhZ2VzL3RhYi1tYXAvdGFiLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUlJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiLW1hcC90YWItbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICBcbiAgXG4gICNhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG4gIFxuICAubWFwLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgI21hcF9jZW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gICAgfVxuICB9XG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tab-map/tab-map.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tab-map/tab-map.page.ts ***!
  \***********************************************/
/*! exports provided: TabMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapPage", function() { return TabMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");




var TabMapPage = /** @class */ (function () {
    function TabMapPage(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    TabMapPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    TabMapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('tilesloaded', function () {
                console.log('accuracy', _this.map);
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    TabMapPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = "";
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ", ";
            }
            _this.address = _this.address.slice(0, -2);
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TabMapPage.prototype, "mapElement", void 0);
    TabMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-map',
            template: __webpack_require__(/*! ./tab-map.page.html */ "./src/app/pages/tab-map/tab-map.page.html"),
            styles: [__webpack_require__(/*! ./tab-map.page.scss */ "./src/app/pages/tab-map/tab-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]])
    ], TabMapPage);
    return TabMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tab-map-tab-map-module.js.map