import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-dayrecord',
        children: [
          { path: '', loadChildren: '../pages/tab-dayrecord/tab-dayrecord.module#TabDayrecordPageModule' }
        ]
      },
      {
        path: 'tab-review',
        children: [
          { path: '', loadChildren: '../pages/tab-review/tab-review.module#TabReviewPageModule' }
        ]
      },
      {
        path: 'tab-map',
        children: [
          { path: '', loadChildren: '../pages/tab-map/tab-map.module#TabMapPageModule' }
        ]
      },
      {
        path: 'tab-setting',
        children: [
          { path: '', loadChildren: '../pages/tab-setting/tab-setting.module#TabSettingPageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-dayrecord',
        pathMatch: 'full'
      }
    ]
  },
  {//시작화면?
    path: '',
    redirectTo: '/tabs/tab-dayrecord',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
