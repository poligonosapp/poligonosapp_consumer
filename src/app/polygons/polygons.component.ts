import { Component, OnInit } from '@angular/core';

// import * as L from 'leaflet';
// import * as L from '@poligonosdemos/leaflet';// snyk monitor
const { L } = require('@poligonosdemos/leaflet');

// import * as LT from '@types/leaflet';

// Lighthouse Perfomance 19 async promise ?????
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// async function  lazyloadingwebvitals(){

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const LEAFLET_ACCESS_TOKEN = require('./auth.service');

L.tileLayer.accessToken = LEAFLET_ACCESS_TOKEN; // || process.env.leaflet-secret;

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      // eslint-disable-next-line max-len
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: LEAFLET_ACCESS_TOKEN,
  }
).addTo(mymap);

const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(mymap);

// }

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
})
export class PolygonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
