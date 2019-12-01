import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HospitalModalPage } from '../../hospital-modal/hospital-modal.page'
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { Clinics } from "../../../provider/clinic";

declare var google;

@Component({
  selector: 'app-tab-map',
  templateUrl: 'tab-map.page.html',
  styleUrls: ['tab-map.page.scss']
})
export class TabMapPage {
  clinic_id: any = [1, 2, 3, 4];
  clinic_name: any;
  clinicX: any;
  clinicY: any;
  hosdata: any = [];

  hospitals = [
    ['동물병원2', 37.599550, 126.958675, 5],
    ['드림동물병원', 37.503762, 126.861637, 3],
    ['캐슬동물종합병원', 37.506286, 126.859344, 2],
    ['벨라동물병원', 37.500927, 126.884625, 1]
  ];

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: string;
  dataReturned: any;
  isenabled: boolean = false;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController,
    private router: Router,
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public clinic: Clinics) {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: HospitalModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Hospital detail"
      },
      cssClass: 'custommodal'
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.loadMap();
    this.route.queryParams.subscribe(params => {
      console.log('tab-map ngOnInit start routing');
      if (params && params.clinic_id) {
        this.clinic_id = params.clinic_id;
      }
      else {
        console.log('tab-map routing failed');
      }
    });
    console.log("map clinic_id", this.clinic_id)
    for (var i = 0; this.clinic_id; i++) {
      this.clinic.getClinicDetail(this.clinic_id[i]).then((data) => {
        this.hosdata[i] = data[i];
        //this.clinic_id = data[0]['clinic_code'];
        this.clinic_name = data[i]['clinic_name'];
        this.clinicX = data[i]['clinicX'];
        this.clinicY = data[i]['clinicY'];
      });
    }
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      //this.map = new google.maps.create(this.mapElement.nativeElement, mapOptions);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.setMarkers(this.map);
      //marker.setMap(this.map);
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy', this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
      console.log('disabled: ', this.isenabled);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  setMarkers(map) {
    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      //url: '../../assets/icon/center_marker.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (var i = 0; this.hosdata[i]; i++) {
      console.log('clincX:' + this.hosdata.length)
      console.log('clincX:' + this.hosdata[i]['clinicX'])
      var hospital = this.hospitals[i];
      var marker = new google.maps.Marker({
        position: { lat: this.hosdata[i]['clinicX'], lng: this.hosdata[i]['clinicY'] },
        map: map,
        icon: image,
        shape: shape,
        title: hospital[0],
        zIndex: hospital[3]
      });

      marker.addListener('click', function () {
        this.isenabled = true;
        this.openModal();
        console.log('disabled: ', this.isenabled);
      });
      marker.setMap(map);
    }
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

}