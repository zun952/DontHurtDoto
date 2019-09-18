import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.page.html',
  styleUrls: ['./create-review.page.scss'],
})
export class CreateReviewPage implements OnInit {
  pets = [];
  currentDate: String;

  constructor() {
    this.pets = ["캔디", "미야", "호야", "두야"];
    this.currentDate = new Date().toISOString();
  }

  ngOnInit() {
  }

}
