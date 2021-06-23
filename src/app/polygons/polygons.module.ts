import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolygonsComponent } from './polygons.component';
import {LoadingExampleComponent} from "../loading-example/loading-example.component";

@NgModule({
    declarations: [PolygonsComponent, LoadingExampleComponent],
  imports: [
    CommonModule
  ]
})
export class PolygonsModule { }
