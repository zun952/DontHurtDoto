import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public router: Router, public popoverController: PopoverController, public navCtrl: NavController) { }

  ngOnInit() {}

  modifyReview(){
    this.popoverController.dismiss();
    this.router.navigate(['/review/' + "modify"]);
  }

  deleteReview(){
    console.log("삭제");
    this.popoverController.dismiss();
    this.navCtrl.pop();
  }
}
