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
  dataList: Array<any> = [ 1, 2, 3, 4];
  user_id: any;
  dx_id: any;
  clinic_id : any = 1;

  constructor(public router: Router, public review: Reviews){
    /*
    this.review.getDxList(this.user_id).then((data) => {
        //파싱하는 법
        //날짜 별 리스트 업 하기
        //달력 버튼 누르면 재 검색하기
    });
    */
    this.user_id = 'gofire99@naver.com';
    this.dx_id = 1;
    this.clinic_id = 1;
  }
  
  loadData(event) {
    console.log("load data");
    setTimeout(() => {
      console.log('Done');

      for(let i = 0; i < 30; i++){
        this.dataList.push("Item Number : " + this.dataList.length);
        console.log("fn : " + i);
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

  showReview(){
    let navExtra: NavigationExtras = {
      queryParams: {
        user_id: this.user_id,
        dx_id: this.dx_id
      }
    }
    this.router.navigate(['/show-review'], navExtra);
  }
  showClinic(){
    let navExtra: NavigationExtras = {
      queryParams:{
        clinic_id: this.clinic_id
      }
    }
    console.log(this.clinic_id)
    this.router.navigate(['/tab-map'], navExtra);
  }
}