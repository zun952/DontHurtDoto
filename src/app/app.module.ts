import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PopoverComponent } from '../app/popover/popover.component';
import { Reviews } from 'src/provider/review';
import { Clinics } from 'src/provider/clinic';
import { HttpModule } from '@angular/http';
import { HospitalModalPageModule } from './hospital-modal/hospital-modal.module';
@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [ BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HospitalModalPageModule,
    IonicModule.forRoot({
      scrollPadding: false,
      scrollAssist: true
    }) ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Reviews,
    Clinics,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})


export class AppModule {

}
