// require('es6-promise').polyfill();
require('isomorphic-fetch');
fs = require('fs');

let api_key = fs.readFileSync('api_key').toString();

let retrieveGIF = function(api_key) {
	fetch('http://api.giphy.com/v1/gifs/random?api_key=' + api_key).then((response) => {
		return response.json();
	}).then((json) => {
		console.log(json['data']['image_original_url']);
		return json;
	});
}

module.exports = {
	api_key: api_key,
	retrieveGIF: retrieveGIF
}