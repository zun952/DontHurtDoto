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
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';

import { Reviews } from 'src/provider/review';
<<<<<<< HEAD
import { Clinics } from 'src/provider/clinic';
import { HttpModule } from '@angular/http';
import { HospitalModalPageModule } from './hospital-modal/hospital-modal.module';
=======
import { Pets } from 'src/provider/pet';
import { Clinics } from "src/provider/clinic";

>>>>>>> master
@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HospitalModalPageModule,
=======
    FormsModule,
    CalendarModule,
>>>>>>> master
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
<<<<<<< HEAD
=======
    Pets,
>>>>>>> master
    Clinics,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})


export class AppModule {

}
