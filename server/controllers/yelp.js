module.exports = {
	// Yelp API js library
	search: function(request, response){
		var Yelp = require('yelp');

		var yelp = new Yelp({
		  consumer_key: 'hbOu-quny8ncYVJznM4Alg',
		  consumer_secret: 'PT_AIp2myr9xhksTndfhAOeK59Q',
		  token: 'WJNz3j8mpQYP0_rh2LcG6MfGj9ZMzPU9',
		  token_secret: 'cw2lgabYA1CZvhwPdhXa7_VxTZA',
		});

		// See http://www.yelp.com/developers/documentation/v2/search_api
		yelp.search({ term: 'water refill', ll: request.body.latitude+","+request.body.longitude, limit: '10', category_filter: 'grocery,convenience' })
		.then(function (data) {
		  var businesses = data['businesses'];
		  var locations=[];
		  for(var i=0; i < businesses.length; i++) {
		  	locations.push({"id":i+1, "name":businesses[i].name,"city":businesses[i].location.city, "coordinate":businesses[i].location.coordinate,"image_url":businesses[i].image_url, "is_closed":businesses[i].is_closed, "rating": businesses[i].rating_img_url_large, "review_count": businesses[i].review_count, "display_phone": businesses[i].display_phone, "address":businesses[i].location.display_address,  "snippet_text":businesses[i].snippet_text,"url":businesses[i].url})
		  }

		  // console.log(locations);
		  // return locations;
		  if(request.url =='/stores'){
		  response.render('waterStores', {stores:locations});
			}
		  else if(request.url =='/ajax/stores'){
		  	response.json(locations)
		  }
		})
		.catch(function (err) {
		  console.error(err);
		});

			}

};
