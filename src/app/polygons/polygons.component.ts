import 'poligonos-get';

import $ from "jquery";

// import * as HTMLElement from 'typescript';
// import * as Node from 'typescript';

// import { LoadingExample } from './loading-example';

import { Component, OnInit } from '@angular/core';

// import * as L from 'leaflet';
// import * as L from '@poligonosdemos/leaflet';// snyk monitor
// @ts-ignore
//import {L} from '@poligonosdemos/leaflet';
// import {GeoJSON} from '@types/geojson';

import { L, GeoJSON, Polygon} from 'poligonosapp';

const polygonsArray:Array<GeoJSON> =
[
  {
       "type": "Feature",
       "bbox": [-10.0, -10.0, 10.0, 10.0],
       "geometry": {
           "type": "Polygon",
           "coordinates": [
               [
                   [-10.0, -10.0],
                   [10.0, -10.0],
                   [10.0, 10.0],
                   [-10.0, -10.0]
               ]
           ]
       }
   }
,
  {
  "type":"Feature",
  "geometry":{
    type : "Polygon",
  coordinates : [
     [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0 ] ],
     [ [ 2 , 2 ] , [ 3 , 3 ] , [ 4 , 2 ] , [ 2 , 2 ] ]
  ]
  }
},{
  "type":"Feature",
  "geometry":{
    type : "Polygon",
  coordinates : [
     [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0 ] ],
     [ [ 2 , 2 ] , [ 3 , 3 ] , [ 4 , 2 ] , [ 2 , 2 ] ]
  ]
  }
}
];


// const $ = require('jquery');

// import * as $ from 'jquery';

// $('#mapid').width();

alert('loading polygons...');



// import * as LT from '@types/leaflet';

// Lighthouse Perfomance 19 async promise ?????
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// async function  lazyloadingwebvitals(){

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

import AuthService from './auth.service';

const authService = new AuthService();

L.tileLayer.accessToken = authService.LEAFLET_ACCESS_TOKEN; // || process.env.leaflet-secret;

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + authService.LEAFLET_ACCESS_TOKEN,
  {
    attribution:
      // eslint-disable-next-line max-len
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }
).addTo(mymap);

// @ts-ignore
const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(mymap);

 export const poligonos: Array<GeoJSON> = require('./polygons.geojson');

L.geoJSON(polygonsArray).addTo(mymap);





// }

// @import "polygons.component.scss";

import DivPolygonTypeScript from './src/app/api/DivPolygonTypeScript';
import DivPolygonNode from './src/app/api/DivPolygonNode';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
})
export class PolygonsComponent implements OnInit {



  constructor(let element: DivPolygonTypeScript) {

    newFunction(element);

  }// end constructor TypeScript

  constructor(let element: DivPolygonNode) {

    newFunction();

  } // end constructor Node

  constructor(let element: null ) {

    super();

    newFunction();

  } // end constructor null TypeScript

  function newFunction() {

const myLayer = L.geoJSON().addTo(mymap);
    myLayer.addData(poligonos);

    try {

      $( "div" ).click(function() {
  var htmlString = $( this ).html();
  $( this ).text( htmlString );
});

      // 1. Select the div element using the id property
const app = document.getElementById("mapid");

      // 2. Create a new <p></p> element programmatically
const p = document.createElement("div");
// 3. Add the text content
p.textContent = "Welcome, Polygon User!";
      //element.innerHTML = myLayer;
// 4. Append the p element to the div element
       app?.appendChild(element);

     // element.innerHTML = myLayer;

    } finally {
      //mapid lazy loading conclusion
      let nodemon = require('nodemon');
      nodemon.log('div mapid lazy loading conclusion');
    }

  } // end function newFunction


  ngOnInit() {

    alert('loading polygons...');



  }



}
