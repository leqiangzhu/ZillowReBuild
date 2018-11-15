import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
//   const RapidAPI = require('rapidapi-connect');
//   const rapid = new RapidAPI("default-application_5be91e62e4b09efa5fbd073d", "715ae202-7b58-4432-9af7-36e66ba266a4");
  
//   rapid.call('Zillow', 'getSearchResults', { 
//     'zwsId': 'X1-ZWz189zzmsu13f_7lwvq',
//     'citystatezip': ' Kirkland, WA 98034',
//     'address': '12616 ne 134th, pl'
  
//   }).on('success', (payload)=>{
//      /*YOUR CODE GOES HERE*/ 
//   }).on('error', (payload)=>{
//      /*YOUR CODE GOES HERE*/ 
//   });