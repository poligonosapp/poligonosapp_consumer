import { IonicModule } from '@ionic/angular';
// https://angular.io/errors/NG8002
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { PolygonsComponent } from './src/app/polygons/polygons.component';

import { PolygonsModule } from './polygons/polygons.module';

@NgModule({
  schemas: [
  NO_ERRORS_SCHEMA
],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PolygonsModule
  ],
  declarations: [Tab1Page, PolygonsComponent]
})
export class Tab1PageModule {}
