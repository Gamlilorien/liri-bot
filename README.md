# L.I.R.I. Bot
## A _Language_ Interpertation and Recognition Interface

### Overview

In this project I built a simple command-line node application that recieves user commands and search terms and output revelant data in the console.

### Purpose

AI, machine learning, and useful intepertation of user input and extraploating is becoming more and more common place. This app uses Node.js (a server-size Javascript command-line enviorment) to take user input and search different web sources and local log files using web APIs and NPM node modules.

### How to Use

LIRI accepts four differnt types of commands for user input.

   * **concert-this** 

   * **spotify-this-song**

   * **movie-this**

   * **do-what-it-says**

In your bash or terminal window simply type:

      node liri.js command-name 'search string'

Where the **command-name** is literally one of the four commands listed above (no spaces or quotes) and the **search string** is either an Artist, Movie Title, or Songe name etc enclosed in single quotes.

## Visual Examples of the four main LIRI commands:

  1. **concert-this**
      * This command uses the Bands In Town Web API to search for upcoming concerts.
      * Command: **concert-this**
      * Search String: any Band or Artist Name.
        * Example:
      
            node liri.js concert-this 'Incubus'

      ![liri-bot](images/liri_concert-this_1.gif)

  2. **spotify-this-song**
      * This command uses the Spotify Web API to search for song details.
      * Command: **spotify-this-song**
      * Search String: any Song Name.
      * Example:
      
            node liri.js spotify-this-song 'Black Magic Woman'

      ![liri-bot](images/liri_spotify.gif)

  3. **movie-this**
      * This command uses the OMDB Web API to search for movie details.
      * Command: **movie-this**
      * Search String: optional*, otherwise any Movie Title or Name.
      * Example:
      
            node liri.js movie-this 'Fifth Element'

      ![liri-bot](images/liri_movie-this.gif)

      * If the search string is omitted then this command defaults to searching for the movie Mr. Nobody!
      * Example:
      
            node liri.js movie-this

      ![liri-bot](images/liri_movie-this-default.gif)

  4. **do-what-it-says**
      * This command uses the Spotify Web API to search for song details.
      * **Command:** do-what-it-says
      * **Search String:** None.

      ![liri-bot](images/liri_do-what-it-says.gif)

### Technology Used and Depencencies

LIRI is designed specififally to search Spotify for songs, Bands in Town for concerts, OMDB for movies, and NPM fs (included with the node.js install) for a log file saved to the local file system.

1. Step One: install NPM Modules
(NOTE: if cloning this project, you will need to 'npm install NAME-OF-MODULE' for each of the following modules where NAME-OF-MODULE is 'Node', 'Axios', 'Moment', or 'DotEnv' respectively see: https://docs.npmjs.com for details ).

  Required NPM Node Modules:
   * [Node] (https://www.npmjs.com/package/node) - for back-end command-line javascript interface.

   * [Axios](https://www.npmjs.com/package/axios) - for javascript based api calls used for the OMBD API and Bands In Town API respectively.

   * [Moment](https://www.npmjs.com/package/moment) - for formatting the returned concert time search results.

   * [DotEnv](https://www.npmjs.com/package/dotenv) - for loading enviorment variables from .env files used to keep your individual Spotify API credentials private. To use this code you will need to create your OWN .env file in your root directory with the following details:

    ```js
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    ```
    Where the 'spotify-id' and 'your-spotify-secret' are personal keys obtained from your own Spotify Developer account.
    
2. Step Two: Get Your Own Spotify App API keys

  * Login or create a free spotify developer account by visiting: <https://developer.spotify.com/my-applications/#!/>

  * Then go here to create your own API app credentials: <https://developer.spotify.com/my-applications/#!/applications/create>.

  * Update the .env text file you created to your local directory with these new key values.

3. Step Three: GitIgnore
If you are using Git as your version tracking tool, you might want to also create a `.gitignore` file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

```
node_modules
.DS_Store
.env
```
   
## Submission Guide






5. Make a file called `random.txt`.

   * Inside of `random.txt` put the following in with no extra characters or white space:

     * spotify-this-song,"I Want it That Way"



9. Make it so liri.js can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

   * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

   * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     * It's on Netflix!

   * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

### BONUS

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

* Make sure you append each command you run to the `log.txt` file. 

* Do not overwrite your file each time you run a command.

### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**