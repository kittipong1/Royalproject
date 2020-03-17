import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LocationlistPage } from '../pages/locationlist/locationlist';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SearchprojectPage } from '../pages/searchproject/searchproject';
import { ViewitemPage } from '../pages/viewitem/viewitem';
import { AddtripPage } from '../pages/addtrip/addtrip';
import { DosearchPage } from '../pages/dosearch/dosearch';
import { ViewtripPage } from '../pages/viewtrip/viewtrip';
import { ViewcheckinPage } from '../pages/viewcheckin/viewcheckin';
import { CreatetripPage } from '../pages/createtrip/createtrip';
import { Data } from '../providers/data';
 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
var config = {
    apiKey: "AIzaSyAO7Wlc4m7q2Hnr-V9PdmFiLFsGGmTRXbs",
    authDomain: "royolproject-d4150.firebaseapp.com",
    databaseURL: "https://royolproject-d4150.firebaseio.com",
    projectId: "royolproject-d4150",
    storageBucket: "royolproject-d4150.appspot.com",
    messagingSenderId: "464095206877"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    LocationlistPage,
    TabsPage,
    AccountPage,
    AboutusPage,
    SearchprojectPage,
    ViewitemPage,
    AddtripPage,
    DosearchPage,
    ViewtripPage,
    ViewcheckinPage,
    CreatetripPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    LocationlistPage,
    TabsPage,
    AccountPage,
    AboutusPage,
    SearchprojectPage,
    ViewitemPage,
    AddtripPage,
    DosearchPage,
    ViewcheckinPage,
    ViewtripPage,
    CreatetripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
