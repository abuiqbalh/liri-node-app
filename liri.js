

require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var keys=require("./keys");


//require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//var omdbapikey=new request(keys.omdb);
//console.log(client);

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    //console.log(response);
    //console.log(response.statusCode);
  }
});

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

//Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey="+omdbapikey, function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log(JSON.parse(body));
//     console.log("The movie's rating is: " + 
//     JSON.parse(body).imdbRating);
//   }
// });

//var Spotify = require('node-spotify-api');
 

 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });