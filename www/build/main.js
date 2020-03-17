webpackJsonp([13],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\aboutus\aboutus.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>เกี่ยวกับเรา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n 	<img src="assets/imgs/logo.png">\n  <ion-card-content>\n    <ion-card-title>\n      Royalproject application \n      </ion-card-title>\n    <p>\n     The application to collect the attractions as the Royal Project of the Chiang Mai Province.\n     And show infomation of Royal Project\n    </p>\n    <p>\n    	Email : <a href="#">Royalproject@gmail.com</a>\n    </p>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcheckin_viewcheckin__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewtrip_viewtrip__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(afAuth, navCtrl, navParams, app, fdb) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.fdb = fdb;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.stuid(data.uid);
            }
            else {
                console.log("can't connect to database");
            }
        });
        setTimeout(function () {
            _this.fdb.list("nametrip/" + _this.uid).valueChanges().subscribe(function (_data) {
                _this.result = _data;
            });
        }, 1500);
    };
    AccountPage.prototype.stuid = function (Auid) {
        this.uid = Auid;
    };
    AccountPage.prototype.dotrip = function (_uid, _nametrip) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewtrip_viewtrip__["a" /* ViewtripPage */], { uid: _uid, nametrip: _nametrip });
    };
    AccountPage.prototype.docheckin = function (_uid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewcheckin_viewcheckin__["a" /* ViewcheckinPage */], { uid: _uid });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>ทริปของฉัน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n  \n	<ion-list-header>\n    <div>\n    <img src="assets/imgs/account.jpg">\n    </div>\n    ชื่อทริป\n    </ion-list-header>\n<ion-item *ngFor="let item of result">\n	<button ion-button block color="dark" (click)="dotrip(uid,item.tripname)">{{item.tripname}}</button>\n</ion-item>\n<ion-list-header>\n		ประวัติการเช็คอิน\n    </ion-list-header>\n<ion-item>\n	<button ion-button block color="dark" (click)="docheckin(uid)">View</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcheckinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewcheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewcheckinPage = (function () {
    function ViewcheckinPage(navCtrl, navParams, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.items = [];
    }
    ViewcheckinPage.prototype.ionViewDidLoad = function () {
        this.uid = this.navParams.get('uid');
        this.getfdbdata();
        setTimeout(function () {
        }, 1000);
    };
    ViewcheckinPage.prototype.getfdbdata = function () {
        var _this = this;
        this.fdb.list('Checkin/' + this.uid).valueChanges().subscribe(function (_data) {
            _this.items = _data;
        });
    };
    ViewcheckinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewcheckin',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewcheckin\viewcheckin.html"*/'<!--\n  Generated template for the ViewcheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>Checkin History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-item *ngFor="let item of items; let i = index">\n 	{{item.nameplace}}\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewcheckin\viewcheckin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewcheckinPage);
    return ViewcheckinPage;
}());

//# sourceMappingURL=viewcheckin.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewtripPage = (function () {
    function ViewtripPage(navCtrl, navParams, fdb, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.toast = toast;
        this.waypts = [];
    }
    ViewtripPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nametrip = this.navParams.get('nametrip');
        this.uid = this.navParams.get('uid');
        this.list = this.nametrip + this.uid;
        this.getfdbdata();
        setTimeout(function () {
            _this.showmap();
            _this.A = _this.result.Location01.nameplace;
            _this.B = _this.result.Location02.nameplace;
            _this.C = _this.result.Location03.nameplace;
        }, 1000);
    };
    ViewtripPage.prototype.showmap = function () {
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.map = new google.maps.Map(this.mapRef.nativeElement, {
            zoom: 6,
            center: { lat: 18.7061, lng: 98.9817 }
        });
        this.directionsDisplay.setMap(this.map);
        this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    };
    ViewtripPage.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay) {
        var _this = this;
        var waypts = [];
        this.origin = "'" + this.result.Location01.nickmap + "'";
        this.destination = "'" + this.result.Location03.nickmap + "'";
        waypts.push({
            location: "'" + this.result.Location02.nickmap + "'",
            stopover: true
        });
        directionsService.route({
            origin: this.origin,
            destination: this.destination,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                _this.toast.create({
                    message: 'ไม่สามารถแสดงเส้นทางได้เนืองจาก Location บางตำแหน่งผิดพลาด',
                    duration: 3000,
                    position: 'top'
                }).present();
            }
        });
    };
    ViewtripPage.prototype.getfdbdata = function () {
        var _this = this;
        this.cc = this.fdb.database.ref('Mytrip/' + this.list);
        this.cc.on('value', function (data) {
            _this.result = data.val();
        });
    };
    ViewtripPage.prototype.deletetrip = function (_uid, _nametrip) {
        this.fdb.database.ref('Mytrip/' + _nametrip + _uid).remove();
        this.fdb.database.ref('nametrip/' + _uid + '/' + _nametrip).remove();
        this.toast.create({
            message: 'ได้ทำการลบ ' + _nametrip + ' เรียบร้อย',
            duration: 3000,
            position: 'top'
        }).present();
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewtripPage.prototype, "mapRef", void 0);
    ViewtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewtrip',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewtrip\viewtrip.html"*/'<!--\n  Generated template for the ViewtripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>{{nametrip}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	Location 1	(A): {{A}}<br>\n	Location 2	(B): {{B}}<br>\n	Location 3	(C): {{C}}<br>\n	<button ion-button color="danger" block (click)="deletetrip(uid,nametrip)">ลบทริปนี้</button>\n<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewtrip\viewtrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ViewtripPage);
    return ViewtripPage;
}());

//# sourceMappingURL=viewtrip.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createtrip_createtrip__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtripPage = (function () {
    function AddtripPage(navCtrl, navParams, fdb, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.toast = toast;
        this.lati = this.navParams.get('lati');
        this.long = this.navParams.get('long');
        this.nameplace = this.navParams.get('nameplace');
        this.idplace = this.navParams.get('idplace');
        this.nickmap = this.navParams.get('nickmap');
        this.uid = this.navParams.get('uid');
        this.nameForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            "nametrip": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            "location": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: 'Location01', disabled: false })
        });
    }
    AddtripPage.prototype.doSubmit = function (event) {
        if (this.nameForm.value.location && this.nameForm.value.nametrip) {
            this.fdb.database.ref('Mytrip/' + this.nameForm.value.nametrip + this.uid + '/' + this.nameForm.value.location).set({
                lati: this.lati,
                long: this.long,
                nickmap: this.nickmap,
                nameplace: this.nameplace
            });
            this.toast.create({
                message: 'เพิ่มทริป ' + this.nameplace + ' ลงในทริปเรียบร้อย',
                duration: 3000,
                position: 'top'
            }).present();
            this.navCtrl.pop();
        }
        else {
            console.log('Save Error');
        }
    };
    AddtripPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fdb.list("nametrip/" + this.uid).valueChanges().subscribe(function (_data) {
            _this.result = _data;
        });
        setTimeout(function () {
            // console.log(this.result);
        }, 1000);
    };
    AddtripPage.prototype.docreatnamptrip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createtrip_createtrip__["a" /* CreatetripPage */], { uid: this.uid });
    };
    AddtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addtrip',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\addtrip\addtrip.html"*/'<!--\n  Generated template for the AddtripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>เพิ่มทริป</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <form [formGroup]="nameForm">\n    <ion-list radio-group formControlName="nametrip">\n\n      <ion-list-header>\n        ชื่อทริป\n      </ion-list-header>\n       <button (click)="docreatnamptrip()" ion-button block color="main">สร้างชื่อทริป</button>\n       <ion-item *ngFor="let item of result" >\n          <ion-label>{{item.tripname}}</ion-label>\n        <ion-radio value="{{item.tripname}}"></ion-radio>\n      </ion-item>\n       \n    </ion-list>\n      <ion-list radio-group formControlName="location">\n\n    <ion-list-header>\n       ลำดับสถานที่\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Location01</ion-label>\n        <ion-radio value="Location01" checked="true"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Location02</ion-label>\n        <ion-radio value="Location02"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Location03</ion-label>\n        <ion-radio value="Location03"></ion-radio>\n      </ion-item>\n       \n    </ion-list>\n   <button ion-button type="submit" block  (click)="doSubmit($event)">Add </button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\addtrip\addtrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AddtripPage);
    return AddtripPage;
}());

//# sourceMappingURL=addtrip.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatetripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreatetripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatetripPage = (function () {
    function CreatetripPage(navCtrl, navParams, fdb, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.toast = toast;
    }
    CreatetripPage.prototype.ionViewDidLoad = function () {
        this.uid = this.navParams.get('uid');
    };
    CreatetripPage.prototype.createnametrip = function () {
        this.fdb.database.ref('nametrip/' + this.uid + '/' + this.tripname).set({
            tripname: this.tripname,
            details: this.details,
            date: this.date
        });
        this.fdb.database.ref('Mytrip/' + this.tripname + this.uid).set({
            Location01: { nameplace: 'a', nickmap: 'a' },
            Location02: { nameplace: 'a', nickmap: 'a' },
            Location03: { nameplace: 'a', nickmap: 'a' }
        });
        this.toast.create({
            message: 'สร้างทริป ' + this.tripname + ' เรียบร้อย',
            duration: 3000,
            position: 'top'
        }).present();
        this.navCtrl.pop();
    };
    CreatetripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createtrip',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\createtrip\createtrip.html"*/'<!--\n  Generated template for the CreatetripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>สร้างทริปของฉัน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <br>\n	ชื่อทริป<ion-item><ion-input [(ngModel)]="tripname" clearInput></ion-input></ion-item>\n	กำหนดการท่องเที่ยว<ion-item><ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="date"></ion-datetime></ion-item>\n  	รายละเอียด<ion-item><ion-textarea [(ngModel)]="details" clearInput></ion-textarea></ion-item>\n  <button (click)="createnametrip()" ion-button block>สร้างทริป</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\createtrip\createtrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CreatetripPage);
    return CreatetripPage;
}());

//# sourceMappingURL=createtrip.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewitem_viewitem__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DosearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DosearchPage = (function () {
    function DosearchPage(navCtrl, navParams, fdb, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.toast = toast;
        this.geo = [];
        this.items = [];
        this.result = [];
    }
    DosearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.uid = this.navParams.get('uid');
        this.range = this.navParams.get('range');
        this.geo = [this.navParams.get('geo')];
        this.getfdbdata();
        console.log(this.geo);
        setTimeout(function () {
            _this.searchdata(_this.range);
        }, 1000);
        setTimeout(function () {
            if (_this.result.length < 1) {
                _this.toast.create({
                    message: 'ไม่พบโครงสถานที่โครงการตามระยะทางที่กำหนด',
                    duration: 3000,
                    position: 'top'
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'ผลการค้นหามีจำนวณทั้งหมด ' + _this.result.length + ' โครงการ',
                    duration: 3000,
                    position: 'top'
                }).present();
            }
        }, 1500);
    };
    DosearchPage.prototype.getfdbdata = function () {
        var _this = this;
        this.fdb.list('Items/').valueChanges().subscribe(function (_data) {
            _this.items = _data;
        });
    };
    DosearchPage.prototype.searchdata = function (range) {
        this.yrange = this.geo[0].lati + (range * 0.00475059);
        this.yerange = this.geo[0].lati - (range * 0.00475059);
        this.xrange = this.geo[0].long + (range * 0.00475059);
        this.xerange = this.geo[0].long - (range * 0.00475059);
        // console.log(this.yrange,this.yerange,this.xrange,this.xerange);
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].lati < this.yrange && this.items[i].lati > this.yerange && this.items[i].long < this.xrange && this.items[i].long > this.xerange) {
                this.result[this.result.length++] = this.items[i];
            }
        }
    };
    DosearchPage.prototype.viewitem = function (_item, _id, _uid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewitem_viewitem__["a" /* ViewitemPage */], { item: _item, id: _id, uid: _uid });
    };
    DosearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dosearch',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\dosearch\dosearch.html"*/'<!--\n  Generated template for the DosearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>ผลการค้นหา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item *ngFor="let item of result; let i = index" (click)="viewitem(item,i+1,uid)" >\n  <ion-card >\n 	<div #noresult id="noresult">\n 	</div>\n    <div>\n      <img src="assets/imgs/{{item.img}}"/>\n    </div>\n     <button ion-item >\n    <ion-card-content>\n      <ion-card-title>\n       {{item.nameplace}}\n      </ion-card-title>\n      <p>\n        {{item.address}}\n      </p>\n    </ion-card-content>\n  </button>\n  </ion-card>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\dosearch\dosearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], DosearchPage);
    return DosearchPage;
}());

//# sourceMappingURL=dosearch.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewitem_viewitem__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LocationlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationlistPage = (function () {
    function LocationlistPage(platform, navCtrl, navParams, fdb, toast, afAuth) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.toast = toast;
        this.afAuth = afAuth;
        this.items = [];
        this.fdb.list("Items/").valueChanges().subscribe(function (_data) {
            _this.result = _data;
        });
        setTimeout(function (fun) {
            _this.initializeitems();
        }, 3000);
    }
    LocationlistPage.prototype.stuid = function (Auid) {
        this.uid = Auid;
    };
    LocationlistPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                var modeluser = data;
                _this.stuid(data.uid);
                _this.toast.create({
                    message: 'Wellcome to Royalproject Application  ' + modeluser.email,
                    duration: 3000
                }).present();
            }
        });
        setTimeout(function () {
            if (_this.uid == undefined) {
                _this.toast.create({
                    message: 'Email หรือ Password ผิด ไม่สามาเข้าใช้งานได้ กรุณาเข้าสู่ระบบใหม่อีกครั้ง',
                    duration: 3000
                }).present();
            }
        }, 1500);
    };
    LocationlistPage.prototype.initializeitems = function () {
        this.items = this.result;
    };
    LocationlistPage.prototype.viewitem = function (_item, _id, _uid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viewitem_viewitem__["a" /* ViewitemPage */], { item: _item, id: _id, uid: _uid });
    };
    LocationlistPage.prototype.filterItems = function (ev) {
        this.initializeitems();
        var val = ev.target.value;
        if (val) {
            this.items = this.items.filter(function (item) {
                if (!item.nameplace)
                    return false;
                return (item.nameplace.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    LocationlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locationlist',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\locationlist\locationlist.html"*/'<!--\n  Generated template for the LocationlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="main">\n    <ion-title><div align="center">หน้าหลัก</div></ion-title>\n  </ion-navbar>\n <ion-toolbar no-border-top>\n    <ion-searchbar placeholder="ค้นหา"   (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<!--   item<ion-item><ion-input [(ngModel)]="item"></ion-input></ion-item>\n  address<ion-item><ion-input [(ngModel)]="address"></ion-input></ion-item>\n  <button (click)="btnAddClicked()" ion-button>Add</button> --> \n\n  <ion-item *ngFor="let item of items; let i = index" (click)="viewitem(item,item.id,uid)" >\n  <ion-card >\n \n    <div>\n      <img src="assets/imgs/{{item.img}}"/>\n    </div>\n     <button ion-item >\n    <ion-card-content>\n      <ion-card-title>\n       {{item.nameplace}}\n      </ion-card-title>\n      <p>\n        {{item.address}}\n      </p>\n    </ion-card-content>\n  </button>\n  </ion-card>\n  </ion-item>\n \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\locationlist\locationlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LocationlistPage);
    return LocationlistPage;
}());

//# sourceMappingURL=locationlist.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locationlist_locationlist__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutus_aboutus__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searchproject_searchproject__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(platform, navCtrl, navParams, afAuth, appCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.appCtrl = appCtrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__locationlist_locationlist__["a" /* LocationlistPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__searchproject_searchproject__["a" /* SearchprojectPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_4__aboutus_aboutus__["a" /* AboutusPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.uid = data.uid;
            }
        });
        setTimeout(function () {
            if (_this.uid == undefined) {
                _this.platform.ready().then(function () {
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                });
            }
        }, 1500);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\tabs\tabs.html"*/'<ion-tabs>\n <ion-tab [root]="tab1" tabTitle="home" tabIcon="home"></ion-tab>\n <ion-tab [root]="tab2" tabTitle="searchlocation" tabIcon="search"></ion-tab>\n <ion-tab [root]="tab3" tabTitle="mytrip" tabIcon="bus"></ion-tab>\n <ion-tab [root]="tab4" tabTitle="aboutus" tabIcon="navigate"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchprojectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dosearch_dosearch__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Geolocation } from '@ionic-native/geolocation';


var SearchprojectPage = (function () {
    function SearchprojectPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lati = '';
        this.long = '';
        this.range = 5;
    }
    SearchprojectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.stuid(data.uid);
            }
            else {
                console.log("can't connect to database");
            }
        });
        // this.geolocation.getCurrentPosition().then((resp) => {
        // // resp.coords.latitude
        // // resp.coords.longitude
        // this.lati = resp.coords.latitude;
        // this.long = resp.coords.longitude;
        // this.geo = {lati:this.lati,long:this.long};
        // this.location = new google.maps.LatLng(this.lati,this.long);
        // }).catch((error) => {
        // console.log('Error getting location', error);
        // });
        setTimeout(function (fun) {
            if (_this.lati == '' || _this.long == '') {
                _this.lati = 18.7061;
                _this.long = 98.9817;
            }
            _this.showMap(_this.range);
        }, 1500);
        // google.maps.event.addListener(this.map, 'click', this.changelocation());
    };
    SearchprojectPage.prototype.stuid = function (Auid) {
        this.uid = Auid;
    };
    SearchprojectPage.prototype.showMap = function (range) {
        this.location = new google.maps.LatLng(this.lati, this.long);
        this.option = {
            center: this.location,
            zoom: 10,
            streetViewControl: false,
            mapTypeId: 'roadmap' //roadmap , satellite , hybrid , terrain
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, this.option);
        this.addMarker(this.location, this.map);
        this.range = range;
        this.addCirle(this.range, this.location, this.map);
    };
    SearchprojectPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    SearchprojectPage.prototype.addCirle = function (radius, position, map) {
        return new google.maps.Circle({
            center: position,
            radius: (radius / 6378.1) * 6378100,
            strokeColor: "#e27afb",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#e27afb",
            fillOpacity: 0.4,
            map: map,
        });
    };
    SearchprojectPage.prototype.onChange = function (ev) {
        this.showMap(ev._value);
    };
    SearchprojectPage.prototype.Changeposition = function () {
    };
    SearchprojectPage.prototype.godosearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dosearch_dosearch__["a" /* DosearchPage */], { range: this.range, geo: { lati: 18.7061, long: 98.9817 }, uid: this.uid });
        //   this.navCtrl.push(DosearchPage,{range:this.range,geo:this.geo,uid:this.uid});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SearchprojectPage.prototype, "mapRef", void 0);
    SearchprojectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchproject',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\searchproject\searchproject.html"*/'<!--\n  Generated template for the SearchprojectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>ค้นหาโครงการในพื้นที่ใกล้เคียง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <ion-list-header>\n      ระยะค้นหา \n      <ion-badge item-end>{{range}} Km</ion-badge>\n    </ion-list-header>\n<ion-item>\n  <ion-range [(ngModel)]="range"  min="5" max="250" step="5" pin="true" (ionChange)="onChange($event)">\n    <ion-icon range-left small name="ios-compass-outline"></ion-icon>\n    <ion-icon range-right name="md-compass"></ion-icon>\n  </ion-range>\n\n  \n</ion-item>\n<ion-item>\n  <button ion-button block color="dark" (click)="godosearch()">Search</button>\n</ion-item>\n<div #map id="map"></div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\searchproject\searchproject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SearchprojectPage);
    return SearchprojectPage;
}());

//# sourceMappingURL=searchproject.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.pop();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title>สมัครสมาชิค</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="dark" round (click)="register(user)">Register</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		462,
		12
	],
	"../pages/account/account.module": [
		463,
		11
	],
	"../pages/addtrip/addtrip.module": [
		464,
		10
	],
	"../pages/createtrip/createtrip.module": [
		465,
		9
	],
	"../pages/dosearch/dosearch.module": [
		466,
		8
	],
	"../pages/locationlist/locationlist.module": [
		467,
		7
	],
	"../pages/login/login.module": [
		468,
		6
	],
	"../pages/register/register.module": [
		469,
		5
	],
	"../pages/searchproject/searchproject.module": [
		470,
		4
	],
	"../pages/tabs/tabs.module": [
		471,
		3
	],
	"../pages/viewcheckin/viewcheckin.module": [
		472,
		2
	],
	"../pages/viewitem/viewitem.module": [
		473,
		1
	],
	"../pages/viewtrip/viewtrip.module": [
		474,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(317);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_locationlist_locationlist__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_searchproject_searchproject__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_viewitem_viewitem__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addtrip_addtrip__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dosearch_dosearch__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewtrip_viewtrip__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_viewcheckin_viewcheckin__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_createtrip_createtrip__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_data__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var config = {
    apiKey: "AIzaSyAO7Wlc4m7q2Hnr-V9PdmFiLFsGGmTRXbs",
    authDomain: "royolproject-d4150.firebaseapp.com",
    databaseURL: "https://royolproject-d4150.firebaseio.com",
    projectId: "royolproject-d4150",
    storageBucket: "royolproject-d4150.appspot.com",
    messagingSenderId: "464095206877"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_locationlist_locationlist__["a" /* LocationlistPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_searchproject_searchproject__["a" /* SearchprojectPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_viewitem_viewitem__["a" /* ViewitemPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addtrip_addtrip__["a" /* AddtripPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dosearch_dosearch__["a" /* DosearchPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewtrip_viewtrip__["a" /* ViewtripPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_viewcheckin_viewcheckin__["a" /* ViewcheckinPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_createtrip_createtrip__["a" /* CreatetripPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addtrip/addtrip.module#AddtripPageModule', name: 'AddtripPage', segment: 'addtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createtrip/createtrip.module#CreatetripPageModule', name: 'CreatetripPage', segment: 'createtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dosearch/dosearch.module#DosearchPageModule', name: 'DosearchPage', segment: 'dosearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locationlist/locationlist.module#LocationlistPageModule', name: 'LocationlistPage', segment: 'locationlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchproject/searchproject.module#SearchprojectPageModule', name: 'SearchprojectPage', segment: 'searchproject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewcheckin/viewcheckin.module#ViewcheckinPageModule', name: 'ViewcheckinPage', segment: 'viewcheckin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewitem/viewitem.module#ViewitemPageModule', name: 'ViewitemPage', segment: 'viewitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewtrip/viewtrip.module#ViewtripPageModule', name: 'ViewtripPage', segment: 'viewtrip', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_locationlist_locationlist__["a" /* LocationlistPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_searchproject_searchproject__["a" /* SearchprojectPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_viewitem_viewitem__["a" /* ViewitemPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addtrip_addtrip__["a" /* AddtripPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dosearch_dosearch__["a" /* DosearchPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_viewcheckin_viewcheckin__["a" /* ViewcheckinPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewtrip_viewtrip__["a" /* ViewtripPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_createtrip_createtrip__["a" /* CreatetripPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_data__["a" /* Data */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = (function () {
    function Data(http) {
        this.http = http;
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' }
        ];
    }
    Data.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewitemPage = (function () {
    function ViewitemPage(navCtrl, navParams, alerCtrl, fdb, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.fdb = fdb;
        this.toast = toast;
        this.details = [];
        this.details = this.navParams.get('item');
        this.id = this.navParams.get('id');
        this.uid = this.navParams.get('uid');
        this.lati = this.details['lati'];
        this.long = this.details['long'];
        this.nickmap = this.details['nickmap'];
    }
    ViewitemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewitemPage');
        this.showMap();
        this.getratingdata();
    };
    ViewitemPage.prototype.getratingdata = function () {
        this.cc = this.fdb.database.ref('Ratings/' + this.id + '/' + this.uid);
        this.cc.once("value")
            .then(function (snapshot) {
            var name = snapshot.child("avalue").val();
            if (name != null) {
                document.getElementById("rating").innerHTML = "rating :" + name;
            }
            else {
                document.getElementById("rating").innerHTML = "rating : คุณยังไม่ได้ให้คะแนน";
            }
        });
    };
    ViewitemPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(this.lati, this.long);
        var option = {
            center: location,
            zoom: 12,
            streetViewControl: true,
            mapTypeId: 'roadmap' //roadmap , satellite , hybrid , terrain
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, option);
        this.addMarker(location, this.map);
    };
    ViewitemPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    ViewitemPage.prototype.doaddtrip = function (_uid, _idplace, _lati, _long, _nickmap, _nameplace) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addtrip_addtrip__["a" /* AddtripPage */], { uid: _uid, idplace: _idplace, lati: _lati, long: _long, nickmap: _nickmap, nameplace: _nameplace });
    };
    ViewitemPage.prototype.docheckin = function (uid, id, _nameplace) {
        if (uid && id) {
            this.fdb.database.ref('Checkin/' + uid + '/' + id).set({
                nameplace: _nameplace
            });
            this.toast.create({
                message: 'Checkin เรียบร้อย',
                duration: 3000,
                position: 'top'
            }).present();
        }
    };
    ViewitemPage.prototype.doRadio = function (uid, id) {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle('Rating Vote');
        alert.addInput({
            type: 'radio',
            label: '1',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '2',
            value: '2'
        });
        alert.addInput({
            type: 'radio',
            label: '3',
            value: '3'
        });
        alert.addInput({
            type: 'radio',
            label: '4',
            value: '4'
        });
        alert.addInput({
            type: 'radio',
            label: '5',
            value: '5'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                if (uid && id) {
                    _this.fdb.database.ref('Ratings/' + id + '/' + uid).set({
                        avalue: data,
                    });
                    console.log('Save Susess');
                }
                else {
                    console.log('Save Error');
                }
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ViewitemPage.prototype, "mapRef", void 0);
    ViewitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewitem',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewitem\viewitem.html"*/'<!--\n  Generated template for the ViewitemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="main">\n    <ion-title>{{details.nameplace}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div>\n		<img src="assets/imgs/{{details.img}}">\n	</div>\n	<button ion-button color="main" (click)="docheckin(uid,id,details.nameplace)">Check In</button><button ion-button light color="main" (click)="doaddtrip(uid,id,lati,long,nickmap,details.nameplace)">Add to my Trip</button><br>\n	 <div id="rating">rating : </div>\n	<br>\n	Vote : \n	<button ion-button color="danger" (click)="doRadio(uid,id)">\n	  <ion-icon name="star"></ion-icon>\n	  <ion-icon name="star"></ion-icon>\n	  <ion-icon name="star"></ion-icon>\n	  <ion-icon name="star"></ion-icon>\n	  <ion-icon name="star"></ion-icon>\n	</button>\n	<p>\n	{{details.details}}\n	</p>\n	<p>\n	{{details.address}}\n	</p>\n	<p>\n	{{details.phone}}\n	</p>\n	ที่ตั้ง : ละติจูด {{lati}} ลองติจูด {{long}}\n	<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\viewitem\viewitem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ViewitemPage);
    return ViewitemPage;
}());

//# sourceMappingURL=viewitem.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goTabs = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result_1;
            return __generator(this, function (_a) {
                try {
                    this.afAuth.auth.signOut();
                    result_1 = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    setTimeout(function () {
                        if (result_1) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }, 1000);
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="main">\n    <ion-title><div align="center">Royal Project Application</div></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <img src="assets/imgs/login.jpg">\n    </div>\n  <ion-list>\n     \n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  <div padding align="center">\n    <button ion-button color="light" round (click)="goTabs(user)">Sign In</button><button ion-button color="dark" round (click)="goRegister()">Register</button>\n  </div>\n  </ion-list>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\bright\Desktop\ioni\Royalproject\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map