import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-review',
  templateUrl: 'tab-review.page.html',
  styleUrls: ['tab-review.page.scss']
})

export class TabReviewPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  dataList: Array<any> = [6, 4, 2, 3, 1];

  constructor(public router: Router){
    console.log(this.dataList);

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
    this.router.navigate(['/show-review']);
  }
}
