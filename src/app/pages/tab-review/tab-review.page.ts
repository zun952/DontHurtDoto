import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Reviews } from '../../../provider/review';
import { CalendarComponentOptions, CalendarComponent } from "ion2-calendar";
import * as moment from 'moment';

@Component({
  selector: 'app-tab-review',
  templateUrl: 'tab-review.page.html',
  styleUrls: ['tab-review.page.scss'],
})

export class TabReviewPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('calendar', {read: CalendarComponent}) calendarRef: CalendarComponent;

  dataList: Array<any> = [];
  selectedDate: Array<any> = [];
  user_id: any;
  dx_id: any;
  currentDate: any;
  options = {};
  date = new Date();
  optionsCalendar: CalendarComponentOptions = {};
  _daysConfig = [];
  cal: String;

  constructor(
    public router: Router,
    public review: Reviews ){ }

  ngOnInit(){ }

  ionViewDidEnter(){
    console.log("tab R - DidEnter")

    this.user_id = 'gofire99@naver.com';
    this.dx_id = 1;
    this.currentDate = this.date.getFullYear() + '-' +
      (this.date.getMonth() + 1) + '-' + this.date.getDate();
    
    this.options = {
      user_id: this.user_id,
      dx_date: this.currentDate
    };

    /*
    var i = 0
    while( (i = this.selectedDate.shift()) != undefined ) {
      console.log();
    }
    */

    //초기화
    this.selectedDate = []
    this.dataList = []

    //기록 받아오기
    this.review.getDxList(this.options).then((data) => {
      for(var i = 0; data[i]; i++){
        this.dataList[i] = data[i];
        var flash = new Date(this.dataList[i]['diagnosis_date']);

        this._daysConfig[i] = {
          date: flash,
          subTitle: this.dataList[i]['pet_name'],
          marked: true
        };
      }
      
      //달력 설정
      this.optionsCalendar = {
        from: new Date(this.date.getFullYear(), 0, 1),
        daysConfig: this._daysConfig
      };

      this.selectedDate.splice(0, this.selectedDate.length)

      //오늘 날짜 기록 찾기
      for (var i = 0; this.dataList[i]; i++) {
        if(moment(this.currentDate).isSame(this.dataList[i]['diagnosis_date'], 'day')){
          this.selectedDate.push(this.dataList[i])
        }
      }

      //표시할 기록 날짜 포맷 변경
      for(var i = 0; this.selectedDate[i]; i++){
        var date = moment(this.selectedDate[i]['diagnosis_date'])
        this.selectedDate[i]['diagnosis_date'] = date.format("YYYY-MM-DD HH:mm")
      }
    });
  }

  //날짜 선택
  onSelect($event){
    var selectedDay = $event
    console.log("date is selected", selectedDay)

    //리스트 초기화
    //this.selectedDate.splice(0, this.selectedDate.length)
    
    var i = 0
    while( (i = this.selectedDate.shift()) != undefined ) {
      console.log();
    }

    for (var i = 0; this.dataList[i]; i++) {
      if(moment(selectedDay).isSame(this.dataList[i]['diagnosis_date'], 'day')){
        this.selectedDate.push(this.dataList[i])
      }
    }
    for(var i = 0; this.selectedDate[i]; i++){
      var date = moment(this.selectedDate[i]['diagnosis_date'])
      this.selectedDate[i]['diagnosis_date'] = date.format("YYYY-MM-DD HH:mm")
    }

    console.log(this.selectedDate)
  }

  //월 선택
  monthChange($event){
    var selectedMonth = $event['newMonth']['string']
    console.log("month is changed", selectedMonth)

    this.options = {
      user_id: this.user_id,
      dx_date: selectedMonth
    };

    this.review.getDxList(this.options).then((data) => {
      for(var i = 0; data[i]; i++){
        this.dataList[i] = data[i];
        var flash = new Date(this.dataList[i]['diagnosis_date']);

        this._daysConfig[i] = {
          date: flash,
          subTitle: this.dataList[i]['pet_name'],
          marked: true
        };
      }
      
      //달력 설정
      this.optionsCalendar = {
        from: new Date(this.date.getFullYear(), 0, 1),
        daysConfig: this._daysConfig
      };

      //리스트 초기화
      this.selectedDate = []
      /*
      while( (i = this.selectedDate.shift()) != undefined ) {
        console.log();
      }*/

      //오늘 날짜 기록 찾기
      for (var i = 0; this.dataList[i]; i++) {
        if(moment(selectedMonth).isSame(this.dataList[i]['diagnosis_date'], 'day')){
          this.selectedDate.push(this.dataList[i])
        }
      }

      //표시할 기록 날짜 포맷 변경
      for(var i = 0; this.selectedDate[i]; i++){
        var date = moment(this.selectedDate[i]['diagnosis_date'])
        this.selectedDate[i]['diagnosis_date'] = date.format("YYYY-MM-DD HH:mm")
      }
    });

    
  }

  /*
  //infinite scroll
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
  */

  async createReview(){
    this.router.navigate(['/review/create']);

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