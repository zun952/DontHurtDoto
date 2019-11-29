import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";

declare var google;

@Component({
  selector: 'app-clinic-map-modal',
  templateUrl: './clinic-map-modal.component.html',
  styleUrls: ['./clinic-map-modal.component.scss'],
})
export class ClinicMapModalComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef
  map: any;
  address: string;

  constructor(
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder
  ) { }

  ngOnInit() {
    this.loadMap()
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((res) => {
      let latLng = new google.maps.LatLng(res.coords.latitude, res.coords.longitude)
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.mapTypeId.ROADMAP
      }

      this.getAddressFromCoords(res.coords.latitude, res.coords.longitude)
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
      
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy', this.map)
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      })
  
    }).catch((err) =>{
      console.log('Error getting location', err)
    })
  }

  getAddressFromCoords(lat, lng){
    console.log('getAddressFromCoords ' + lat + ' ' + lng)

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    }

    this.nativeGeocoder.reverseGeocode(lat, lng, options).then((result: NativeGeocoderReverseResult[]) => {
      let responseAddress = []
      this.address = ""

      for(let [key, value] of Object.entries(result[0])){
        if(value.length > 0){
          responseAddress.push(value)
        }
      }

      responseAddress.reverse()
      for(let value of responseAddress){
        this.address += value + ", "
      }
      this.address = this.address.slice(0, -2)
    }).catch((err: any) => {
      this.address = "Address Not Available!"
    })
  }

}
