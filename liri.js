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

//* Accept the following user commands
//`concert-this`
//`spotify-this-song`
//`movie-this`
//`do-what-it-says`

//`spotify-this-song`
function spotifySong() {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
}

spotifySong();