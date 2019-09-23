import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  pets = [];
  currentDate: String;
  diagDate: String;
  sickDate: String;
  myMod: Number;
  clinic: String;
  diagnosis: String;
  symtom: String;
  prognosis: String;

  constructor(public router: Router, public navCtrl: NavController, private activatedRoute: ActivatedRoute) {
    this.pets = ["캔디", "미야", "호야", "두야"];
    this.currentDate = new Date().toISOString();
    this.diagDate = this.currentDate;
    this.sickDate = this.currentDate;
  }

  ngOnInit() {
    let flag = this.activatedRoute.snapshot.paramMap.get("mode");

    if (flag.match("create")) {
      this.myMod = 1;
    } else {
      this.myMod = 0;
    }
  }

  //진료기록 생성
  createReview(){
    
  }
  
  //진료기록 수정
  modifyReview(){

  }

  //작업 취소
  cancel(){ this.navCtrl.pop(); }
}