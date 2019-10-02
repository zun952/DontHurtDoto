import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Reviews } from "../../../provider/review";

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.page.html',
  styleUrls: ['./show-review.page.scss'],
})
export class ShowReviewPage implements OnInit {
  user_id: any;
  dx_id: any;
  diagDate: String;
  clinic: String;
  pet: String;
  diagnosis: String;
  sickDate: String;
  symptom: String;
  prognosis: String;
  cost: number;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public review: Reviews) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params && params.user_id && params.dx_id){
        this.user_id = params.user_id;
        this.dx_id = params.dx_id;
      }
    });

    this.review.getDxDetail(this.dx_id).then((data) => {
      console.log(data[0]);
      this.user_id = data[0]['user_id'];
      this.dx_id = data[0]['diagnosis_id'];
      this.diagDate = data[0]['diagnosis_date'];
      this.clinic = data[0]['clinic_code'];
      this.pet = data[0]['pet_id'];
      this.diagnosis = data[0]['diagnosis_name'];
      this.sickDate = data[0]['sick_date'];     
      this.symptom = data[0]['diagnosis_symptom'];
      this.prognosis = data[0]['diagnosis_prognosis'];
      this.cost = data[0]['diagnosis_cost'];
        //파싱해서 변수에 옮겨서 화면에 표시하기
    });
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