import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ModalController, NavParams } from '@ionic/angular';

import { Clinics } from "../../provider/clinic";

@Component({
  selector: 'app-search-clinic-modal',
  templateUrl: './search-clinic-modal.component.html',
  styleUrls: ['./search-clinic-modal.component.scss'],
})

export class SearchClinicModalComponent implements OnInit {
  @Input() clinicName: String = ""
  @Input() clinicCode: Number = 0
  clinicList: any[] = []

  constructor(
    public location: Location,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public clinic: Clinics
  ) {
    this.clinicName = navParams.get('clinicName')
    this.clinicCode = navParams.get('clinicCode')
  }

  ngOnInit() {}

  searchClinic(){
    this.clinicList = []

    this.clinic.getClinicList(this.clinicName).then((data) => {
      for(var i = 0; data[i]; i++){
        this.clinicList[i] = data[i]
      }
    })
  }

  goBack(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'packed': false
    }, 'cancel')
  }

  inputClinic(name, code) {
    this.clinicName = name
    this.clinicCode = code

    this.modalCtrl.dismiss({
      'dismissed': true,
      'packed': true,
      'clinicName': this.clinicName,
      'clinicCode': this.clinicCode
    })
  }
}
