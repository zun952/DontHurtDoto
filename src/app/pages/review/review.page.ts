import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Reviews } from "../../../provider/review";
import { Pets } from "../../../provider/pet";

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
    public pets: Pets) { }

  ngOnInit() {
    this.user_id = "gofire99@naver.com";
    this.currentDate = new Date().toLocaleString();
    let flag = this.route.snapshot.paramMap.get("mode");
    
    this.pets.getPetList(this.user_id).then(data => {
      for(var i = 0; data[i]; i++){
        this.petList[i] = data[i]['pet_name']
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
    let datetime = new Date(String(this.diagDate));
    let date = datetime.getFullYear() + '-' + (datetime.getMonth() + 1) + '-' +
      datetime.getDate() + ' ' + (datetime.getHours() - 9) + ':' + datetime.getMinutes() + ':' + '00';

    
    let sicktime = new Date(String(this.sickDate));
    let sick = sicktime.getFullYear() + '-' + (sicktime.getMonth() + 1) + '-' +
      (sicktime.getDate() - 1) + ' ' + '15' + ':' + '00' + ':' + '00';
      
    this.options = {
      user_id: this.user_id,
      diagDate: String(date),
      //clinic: this.clinic.code,
      clinic: 1,
      //pet: this.pet.code,
      pet: 1,
      diagnosis: this.diagnosis,
      sickDate: String(sick),
      symptom: this.symptom,
      prognosis: this.prognosis,
      cost: this.cost
    }
    this.review.postDx(this.options).then((data) => {
      this.dx_id = data[0]['user_id'];
    });

    let navExtra: NavigationExtras = {
      queryParams: {
        dx_id: this.dx_id
      }
    }

    this.router.navigate(['/show-review'], navExtra);
  }
  
  //진료기록 수정
  modifyReview(){
    this.options = {
      user_id: this.user_id,
      diagDate: this.diagDate,
      clinic: this.clinic,
      pet: this.pet.id,
      diagnosis: this.diagnosis,
      sickDate: this.sickDate,
      symptom: this.symptom,
      prognosis: this.prognosis,
      cost: this.cost
    }

    this.review.putDx(this.options).then((data) =>{
      console.log(data);
    });    
    
    this.router.navigate(['/show-review']);
  }

  //작업 취소
  cancel(){
    this.navCtrl.pop();
  }
}