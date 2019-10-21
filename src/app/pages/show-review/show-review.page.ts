import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
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
  clinic = {};
  pet = {};
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
      } else{
        this.dx_id = params.dx_id;
      }
    });

    this.review.getDxDetail(this.dx_id).then((data) => {
      this.diagDate = data[0]['diagnosis_date'];
      this.clinic =  {
        code: data[0]['clinic_code'],
        name: data[0]['clinic_name']
      };
      this.pet = {
        id: data[0]['pet_id'],
        name: data[0]['pet_name']
      };
      this.diagnosis = data[0]['diagnosis_name'];
      this.sickDate = data[0]['sick_date'];     
      this.symptom = data[0]['diagnosis_symptom'];
      this.prognosis = data[0]['diagnosis_prognosis'];
      this.cost = data[0]['diagnosis_cost'];
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
    let navExtra: NavigationExtras = {
      queryParams: {
        user_id: this.user_id,
        dx_id: this.dx_id,
        diagDate: this.diagDate,
        clinic_code: this.clinic['code'],
        clinic_name: this.clinic['name'],
        pet_id: this.pet['id'],
        pet_name: this.pet['name'],
        diagnosis: this.diagnosis,
        sickDate: this.sickDate,
        symptom: this.symptom,
        prognosis: this.prognosis,
        cost: this.cost
      }
    }
    this.router.navigate(['/review/' + "modify"], navExtra);
  }

  deleteReview(){
    this.navCtrl.pop();
  }
}