var cityname ="new york"

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query="+cityname+"&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "24e0114115msha91991ed1a11cd9p1e13b9jsn62259ea0d893",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"

	}
};


$.ajax(settings).done(function (data) {
	console.log(data);
	console.log(data.suggestions[0].entities[0].destinationId);
var destinationId =data.suggestions[0].entities[0].destinationId;

console.log(destinationId);



const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destinationId+ "&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "24e0114115msha91991ed1a11cd9p1e13b9jsn62259ea0d893",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (data) {
	console.log(data);
	

	for (let i = 0; i < 5; i++) {
		
		
	
	console.log(data.data.body.searchResults.results[i].name);
		var addRess = data.data.body.searchResults.results[i].address
		var streetAdd = addRess.streetAddress;
		var Local = addRess.locality;
		var regn = addRess.region;
		var ZipCode = addRess.postalCode;

	console.log(streetAdd + " " + Local + " " + regn + ", " + ZipCode);
	console.log(data.data.body.searchResults.results[i].ratePlan.price.current);
	console.log(data.data.body.searchResults.results[i].starRating);
	console.log(data.data.body.searchResults.results[i].thumbnailUrl);
}

});







});

