import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-setting',
  templateUrl: './tab-setting.page.html',
  styleUrls: ['./tab-setting.page.scss'],
})
export class TabSettingPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  editpet(){
    this.router.navigate(['/edit-pet']);
  }
  editaccount(){
    this.router.navigate(['/edit-account']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
