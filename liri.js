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
    console.log("\n----------------------------\nSpotify Song Search Results\n----------------------------");
    console.log(artist);
    console.log(song);
    console.log(album);
    console.log(songURL +"\n");
  })
  .catch(function(err) {
    console.log(err);
  });
}

spotifySong();