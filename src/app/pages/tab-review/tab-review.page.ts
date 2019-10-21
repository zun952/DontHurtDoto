import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Reviews } from '../../../provider/review'

@Component({
  selector: 'app-tab-review',
  templateUrl: 'tab-review.page.html',
  styleUrls: ['tab-review.page.scss'],
})

export class TabReviewPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  dataList: Array<any> = [];
  user_id: any;
  dx_id: any;
  currentDate: any;
  options = {};
  date = new Date()

  constructor(public router: Router, public review: Reviews){ }

  ngOnInit(){
    this.user_id = 'gofire99@naver.com';
    this.dx_id = 1;
    this.currentDate = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' +
      '13'/*this.date.getDate()*/;
    console.log(this.currentDate);

    this.options = {
      user_id: this.user_id,
      //dx_date: this.dx_date
      dx_date: this.currentDate
    };

    this.review.getDxList(this.options).then((data) => {
      for(var i = 0; data[i]; i++){
        this.dataList[i] = data[i];
        this.dataList[i]['diagnosis_date'] =
         new Date(this.dataList[i]['diagnosis_date']).getHours() + ':' +
         new Date(this.dataList[i]['diagnosis_date']).getMinutes();
      }
    });
  }

  ionViewWillEnter() {
    this.review.getDxList(this.options).then((data) => {
      for(var i = 0; data[i]; i++){
        this.dataList[i] = data[i];
        this.dataList[i]['diagnosis_date'] =
         new Date(this.dataList[i]['diagnosis_date']).getHours() + ':' +
         new Date(this.dataList[i]['diagnosis_date']).getMinutes();
      }
    });
  }
  
  loadData(event) {
    setTimeout(() => {
      console.log('Done');

      for(let i = 0; i < 30; i++){
        this.dataList.push("Item Number : " + this.dataList.length);
      }
      event.target.complete();

      if(this.dataList.length == 1000){
        event.target.disabled = true;
      }
    }, 500);
  }

  createReview(){
    this.router.navigate(['/review/'+'create']);
  }

  showReview(dx_id: number){
    let navExtra: NavigationExtras = {
      queryParams: {
        user_id: this.user_id,
        dx_id: dx_id
      }
    }
    this.router.navigate(['/show-review'], navExtra);
  }
}