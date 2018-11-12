// const RapidAPI = require('rapidapi-connect');
// const rapid = new RapidAPI("default-application_5be91e62e4b09efa5fbd073d", "715ae202-7b58-4432-9af7-36e66ba266a4");

// rapid.call('Zillow', 'getDeepSearchResults', { 
// 	'citystatezip': ' Kirkland, WA 98034',
// 	'zwsId': 'X1-ZWz189zzmsu13f_7lwvq',
// 	'address': '12704 NE 142nd Ln,'

// }).on('success', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// }).on('error', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// });

// export class Doctor {

// 	GetDoctorList(doctorName){
// 	return  new Promise(function(resolve, reject) {
// 	  let request = new XMLHttpRequest();
// 	  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${doctorName}&location=wa-seattle&user_location=47.6062%2C122.3321&skip=0&limit=10&user_key=${
// 		process.env.exports.apikey
// 	  }`;         
	 
// 	  request.onload = function() {
// 		if (this.status === 200) {
// 		  resolve(request.response);
// 		} else {
// 		  reject(Error(request.statusText));
// 		}
// 	  }
// 	  request.open("GET", url, true);
// 	  request.send();
// 	});
// }
// }


