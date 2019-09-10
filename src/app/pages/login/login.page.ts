import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(){
    //this.navCtrl.pop();
    console.log("username : " + this.username);
    console.log("password : " + this.password);
  }

  resister(){
  }
}