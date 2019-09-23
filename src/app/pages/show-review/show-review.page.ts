import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';


@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.page.html',
  styleUrls: ['./show-review.page.scss'],
})
export class ShowReviewPage implements OnInit {
  pet: String;
  diagDate: String;
  sickDate: String;
  clinic: String;
  diagnosis: String;
  symtom: String;
  prognosis: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public popoverController: PopoverController, public navCtrl: NavController) {
    this.pet = "캔디";
    this.clinic = "미니주";
  }

  ngOnInit() {

  }

  /*
  async popSetting(event){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event,
      keyboardClose: true
    });

    popover.style.cssText = '--min-width: 100px; --max-width: 150px;';

    return await popover.present();
  }
  */

  modifyReview(){
    this.router.navigate(['/review/' + "modify"]);
  }

  deleteReview(){
    this.navCtrl.pop();
  }
}
