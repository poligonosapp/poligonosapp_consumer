import 'poligonos-get';

import { Injectable } from '@angular/core';

import { PolygonsComponent, polygonLayer } from './polygons/polygons.component';

@Injectable({
  providedIn: 'root'
})
export class PolygonsService {

  constructor() {
    const polygonsComponent = new PolygonsComponent(document.getElementById('mapid'));
  }
}
