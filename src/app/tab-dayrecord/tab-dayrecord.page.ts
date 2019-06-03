import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab-dayrecord',
  templateUrl: 'tab-dayrecord.page.html',
  styleUrls: ['tab-dayrecord.page.scss']
})
export class TabDayrecordPage {
  @ViewChild('doughnutCanvas1') doughnutCanvas1;
  @ViewChild('doughnutCanvas2') doughnutCanvas2;
  doughnutChart1: any;
  doughnutChart2: any;

  ionViewDidEnter(){
    this.doughnutChart1 = new Chart(this.doughnutCanvas1.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [1, 3],
          backgroundColor: [
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 0, 1)'
          ]
        }]
      }

    })
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [2, 13],
          backgroundColor: [
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 0, 1)'
          ]
        }]
      }

    })
  }
}
