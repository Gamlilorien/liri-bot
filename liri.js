//loads values from dotenv file and sets as a global variables
require("dotenv").config();
//import keys.js file for spotify api values
var keys = require("./keys.js");
//requires for the npm modules
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

//we should then be able to access your keys information like so
//keys represents the file? and spotify represents the object?
var spotify = new Spotify(keys.spotify);

//we need to get the paramaters passed by the user (ie the command, and the search term)
var command = process.argv[2];
var search = process.argv[3];

//converted to a function so it can be reused
function executeCommand() {
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
}

//now declare this function for file load
executeCommand();
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
        console.log("\n-----------------------------------\n" +artist +" Concert Search Results\n-----------------------------------");
        console.log("Upcoming Events Found: " +itemCount +"\n");
        //now loop through items in array
        for (i = 0; i < itemCount; i++) {
            var item = r[i];
            var venue = item.venue.name;
            var location = item.venue.city +" " +item.venue.region;
            //need to use moment.js to pretify the date result for users ie MM/DD/YYYY HH:MM
            var date = moment(item.datetime).format('ddd, L LT');
            
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
};


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
    console.log("\n-----------------------------------\nSpotify Song Search Results\n-----------------------------------");
    console.log(artist);
    console.log(song);
    console.log(album);
    console.log(songURL +"\n");
  })
  .catch(function(err) {
    console.log(err);
  });
};

//`movie-this`
function movieThis() {
    //now determine the movie to search for. Use user input if any, otherwise default to Mr Nobody
    if (search === undefined) {
        var movie = 'Mr. Nobody';
    }else {
        var movie = search;
    }
    
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL)
    .then(function(response) {
        // If the axios was successful then log response
        var r = response.data;
        console.log("\n-----------------------------------\n" +" Movie Search Results\n-----------------------------------");
        //console.log(r);

        var title = r.Title;
        var year = r.Year;
        var imdb = r.Ratings[0].Value;
        var rottenT = r.Ratings[1].Value;
        var country = r.Country;
        var language = r.Language;
        var plot = r.Plot;
        var actors = r.Actors;

        console.log("Movie Title: " +title);
        console.log("Year Made: " +year);
        console.log("IMDB Score: " +imdb);
        console.log("Rotten Tomatoes: " +rottenT);
        console.log("Country Filmed: " +country);
        console.log("Language: " +language +"\n");
        console.log("Actors: " +actors +"\n");
        console.log("Plot: " +plot +"\n");
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
};

//`do-what-it-says`
function doIt() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        //value from text tile will be command,search so we need to seperate them
        var output = data.split(",");
        command = output[0];
        search = output[1];
        console.log(search);
        //now we run the command
        executeCommand();
    })
};