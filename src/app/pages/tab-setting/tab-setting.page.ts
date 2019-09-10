import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-setting',
  templateUrl: './tab-setting.page.html',
  styleUrls: ['./tab-setting.page.scss'],
})
export class TabSettingPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  editpet(){
    this.navCtrl.navigateForward('/edit-pet');
  }
  editaccount(){
    this.navCtrl.navigateForward('/edit-account');
  }
  logout(){
    
  }
}
