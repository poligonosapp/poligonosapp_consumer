import { Injectable } from '@angular/core';

const github = require('@actions/github');
const core = require('@actions/core');

//const accessToken = process.env.leaflet-secret;

// secret scanning documentation https://docs.github.com/pt/developers/overview/secret-scanning#crie-um-servi%C3%A7o-de-alerta-secreto

const crypto = require('crypto');
const axios = require('axios');

// L.mapbox.accessToken =

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  const { accessToken:string };

// import * as L from 'leaflet@0.7.7';
const { L } = require('leaflet@0.7.7');

// initialize the map on the "map" div with a given center and zoom
const map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13
});

const { mapMobile } = L.map('map').fitWorld();

const ghendpoint = 'https://api.github.com/graphql';

  const GITHUB_KEYS_URI =
    'https://api.github.com/meta/public_keys/secret_scanning';

  public const {LEAFLET_ACCESS_TOKEN:string};

  constructor() {
  run();
  // verify_signature();
}

async function run() {
 try{
   // This should be a token with access to your repository scoped in as a secret.
   // The YML workflow will need to set myToken with the GitHub Secret Token
   // myToken: ${{ secrets.GITHUB_TOKEN }}
   // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
   const myToken = core.getInput('repo-token');

   const octokit = github.getOctokit(myToken);

   const myToken2 = core.getInput('leaflet-secret');

   const octokit2 = github.getOctokit(myToken2);

   //setting L.token
   // accessToken = octokit2;
   this.LEAFLET_ACCESS_TOKEN = octokit2;
   L.mapbox.accessToken = octokit2;

   // You can also pass in additional options as a second parameter to getOctokit
   // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

   const { data: pullRequest } = await octokit.rest.pulls.get({
     owner: 'poligonosapp',
     repo: 'poligonos_consumer',
     pull_number: 123,
     mediaType: {
       format: 'diff'
     }
   });

   console.log(pullRequest);
 }finally {
   return;
 }
}// end run

/**
 *   Verify a payload and signature against a public key
 *   @param {String} payload the value to verify
 *   @param {String} signature the expected value
 *   @param {String} keyID the id of the key used to generated the signature
 *   @return {void} throws if the signature is invalid
 */

const verify_signature = async (
  payload: 'TOKEN_POLIGONOSAPP_CONSUMER_NETLIFY',
  signature: '',
  keyID: 'leaflet-secret'
) => {
  if (typeof payload !== 'string' || payload.length === 0) {
    throw new Error('Invalid payload')
  }
  if (typeof signature !== 'string' || signature.length === 0) {
    throw new Error('Invalid signature')
  }
  if (typeof keyID !== 'string' || keyID.length === 0) {
    throw new Error('Invalid keyID')
  }

  const keys = (await axios.get(GITHUB_KEYS_URI)).data
  if (!(keys?.public_keys instanceof Array) || keys.length === 0) {
    throw new Error('No public keys found')
  }

  try {
    const publicKey =
      keys.public_keys.find((k: 'any') => k.key_identifier === keyID) ?? null
    if (publicKey === null) {
      throw new Error('No public key found matching key identifier')
    }
    const verify = crypto.createVerify('SHA256').update(payload)
    if (
      !verify.verify(
        publicKey.key,
        Buffer.from(signature, 'base64'),
        'base64'
      )
    ) {
      throw new Error('Signature does not match payload')
    }

    // L.mapbox.accessToken = verify_signature || publicKey;

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='+this.LEAFLET_ACCESS_TOKEN,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mapMobile);

  } finally {

    console.log('something went wrong with github leaflet :( ');

  }


};

} // end
