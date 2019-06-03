import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabSettingPage } from './tab-setting.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TabSettingPage
      },
      {
        path: 'edit-account',
        loadChildren: '../edit-account/edit-account.module#EditAccountPageModule'
      },
      {
        path: 'edit-pet',
        loadChildren: '../edit-pet/edit-pet.module#EditPetPageModule'
      },
      
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabSettingPage]
})
export class TabSettingPageModule {}
