//loads values from dotenv file and sets as a global variables
require("dotenv").config();
//import keys.js file for spotify api values
var keys = require("./keys.js");
//requires for the npm modules
var Spotify = require("node-spotify-api");
var axios = require("axios");

//we should then be able to access your keys information like so
//keys represents the file? and spotify represents the object?
var spotify = new Spotify(keys.spotify);

//we need to get the paramaters passed by the user (ie the command, and the search term)
var command = process.argv[2];
var search = process.argv[3];

switch (command) {
    case "concert-this":
    concertThis();
    break;

    case "spotify-this-song":
    spotifySong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doIt();
    break;
}
//* Accept the following user commands
//`concert-this`
//`spotify-this-song`
//`movie-this`
//`do-what-it-says`

//`concert-this`
function concertThis() {
    var artist = search;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming")
    .then(function(response) {
        // If the axios was successful then log response
        var r = response.data;
        var i;
        var itemCount = r.length;
        console.log(itemCount);
        console.log("\n------------------------------\nArtist Concert Search Results\n------------------------------\n");
        //now loop through items in array
        for (i = 0; i < itemCount; i++) {
            var item = r[i];
            var venue = item.venue.name;
            var location = item.venue.city +" " +item.venue.region;
            var date = item.datetime;
            console.log(venue);
            console.log(location);
            console.log(date +"\n");
        }

    })
    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
}


//`spotify-this-song`
function spotifySong() {
    var title = search;
    spotify
  .search({ type: 'track', query: title })
  .then(function(response) {
      var r =response.tracks.items[0];
      var artist = "Artist: " +r.artists[0].name;
      var album = "Album: " +r.album.name;
      var song = "Song: " +r.name;
      var songURL = "Spotify URL: " +r.external_urls.spotify
    console.log("\n------------------------------\nSpotify Song Search Results\n------------------------------");
    console.log(artist);
    console.log(song);
    console.log(album);
    console.log(songURL +"\n");
  })
  .catch(function(err) {
    console.log(err);
  });
}