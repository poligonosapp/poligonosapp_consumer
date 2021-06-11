import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
        children: [
      {
        path: 'polygons',
        children: [
          {
            path: '',
            loadChildren: '../polygons/polygons.module#PolygonsModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/polygons/polygons',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
