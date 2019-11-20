import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { Reviews } from "../../../provider/review";
import { Pets } from "../../../provider/pet";
import { Location } from '@angular/common';
import { PopoverComponent } from 'src/app/popover/popover.component';
import * as moment from 'moment';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})

export class ReviewPage implements OnInit {
  petList = [];        //사용자 펫 목록
  user_id: any;
  dx_id: any;
  currentDate: String;
  diagDate: String;
  sickDate: String;
  clinic = {
    code: 0,  //clinic_code
    name: ""  //clinic_name
  };
  diagnosis: String;
  symptom: String;
  prognosis: String;
  pet = {
    state: 0,
    id: 0,      //pet_code
    name: ""    //pet_name
  };
  petM: String;
  cost: Number;

  myMod: Number = 0;  //0 : modify, 1: create
  options = {};

  constructor(public router: Router, public navCtrl: NavController,
    private route: ActivatedRoute, public review: Reviews,
    public pets: Pets, public location: Location,
    public popoverController: PopoverController) { }

  ngOnInit() {
    this.user_id = "gofire99@naver.com";
    this.currentDate = new Date().toLocaleString();
    let flag = this.route.snapshot.paramMap.get("mode");
    
    this.pets.getPetList(this.user_id).then(data => {
      for(var i = 0; data[i]; i++){
        this.petList[i] = data[i]
      }
    });

    
    if (flag.match("create")) {
      this.myMod = 1;
    } else {      //modify
      this.route.queryParams.subscribe(params => {
        if(params && params.user_id && params.dx_id){
          this.user_id = params.user_id;
          this.dx_id = params.dx_id;
          this.diagDate = params.diagDate;
          this.clinic.code = params.clinic_code;  //병원 정보 가져오기
          this.clinic.name = params.clinic_name;
          this.pet.id = params.pet_id;
          this.pet.name = params.pet_name;
          this.diagnosis = params.diagnosis;
          this.sickDate = params.sickDate;
          this.symptom = params.symptom;
          this.prognosis = params.prognosis;
          this.cost = params.cost;
        }
      });
    }
  }

  //진료기록 생성
  createReview(){
    for(var i = 0; this.petList[i]; i++){
      if(this.petList[i].pet_name == this.pet.name){
        this.pet.id = this.petList[i].pet_id
      }
    }

    this.diagDate = moment(String(this.diagDate)).add(-9, 'hours').format("YYYY-MM-DDThh:mm:ssZ")
    this.sickDate = moment(String(this.sickDate)).format("YYYY-MM-DD")
    console.log(this.diagDate)
    
    this.options = {
      user_id: this.user_id,
      diagDate: this.diagDate,
      //clinic: this.clinic.code,
      clinic: 1,
      pet_id: this.pet.id,
      diagnosis: this.diagnosis,
      sickDate: this.sickDate,
      symptom: this.symptom,
      prognosis: this.prognosis,
      cost: this.cost
    }

    this.review.postDx(this.options).then((data) => {
      console.log(data)
      this.dx_id = data['insertId']

      let navExtra: NavigationExtras = {
        queryParams: {
          user_id: this.user_id,
          dx_id: this.dx_id
        }
      }

      this.router.navigate(['/show-review'], navExtra);
    });
  }
  
  //진료기록 수정
  modifyReview(){
    for(var i = 0; this.petList[i]; i++){
      if(this.petList[i].pet_name == this.pet.name){
        this.pet.id = this.petList[i].pet_id
      }
    }

    this.diagDate = moment(String(this.diagDate)).add(3, 'hours').format("YYYY-MM-DDThh:mm:ss")
    this.sickDate = moment(String(this.sickDate)).format("YYYY-MM-DD")

    this.options = {
      dx_id: this.dx_id,
      user_id: this.user_id,
      diagDate: this.diagDate,
      clinic: this.clinic.code,
      pet_id: this.pet.id,
      diagnosis: this.diagnosis,
      sickDate: this.sickDate,
      symptom: this.symptom,
      prognosis: this.prognosis,
      cost: this.cost
    }

    this.review.putDx(this.options).then((data) =>{
      console.log(data);

      let navExtra: NavigationExtras = {
        queryParams: {
          user_id: this.user_id,
          dx_id: this.dx_id
        }
      }

      this.router.navigate(['/show-review'], navExtra);
    });    
  }

  async searchClinic($event){
    const popover = await this.popoverController.create({
      component: PopoverComponent, event,
      keyboardClose: true
    });

    popover.style.cssText = '--min-width: 100px; --max-width: 150px;';

    return await popover.present();
  }

  //작업 취소
  cancel(){
    this.location.back()
  }
}