/* VARIABLES */
// Set up request status code 
const NOT_FOUND = 404;
const OK = 200;
const BAD = 400;

var apiKey = "1788420828765e6eb1a60d9453e534d1"; // api Key 
//var Req; // variable that will store requests
//var imageBase = 'http://image.tmdb.org/t/p/';


/*var filterOverlayElement = document.getElementsByClassName('hidden');
document.addEvent('click', function(event) {
  var isClickable = filterOverlayElement.contains(event.target);
  
  if (!isClickable) {
    document.getElementsByClassName('hidden').style.display="none";
  }
});*/

/*Start of example  https://www.w3schools.com/howto/howto_js_sidenav.asp*/
function openFilterOverlay() {
    document.getElementById("myFilterOverlay").style.width = "80%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function exitFilterNav() {
    document.getElementById("myFilterOverlay").style.width = "0";
    document.body.style.backgroundColor = "white";
}
/*End of example  https://www.w3schools.com/howto/howto_js_sidenav.asp */

/*function readJSON(elements) {
    elements = JSON.parse(elements);

    elements.forEach(function (element){
        var div = document.getElementById(element.id);
        div.innerHTML = element.text;
    });
}*/
// Display what we're getting back
function reqListener() {
    console.log(this.responseText);
}

/** Request most popular movies*/
function request_TopRatedMovies() {
    var urlTopRated = apiBase + "/movie/top_rated" + apiKey;
    //URL: /discover/movie?sort_by=popularity.desc
    var requestTop = new XMLHttpRequest();
    requestTop.addEventListener("load", reqListener);
    // Requesting to get info in JSON format
    requestTop.open("GET", urlTopRated, JSON);
    requestTop.send();
}
/** Display only 3 top movies */
function ReadMovies() {
    var topMovies = [];
    /* parse the JSON with the movie elements 
        moviesTopRated = JSON.parse(moviesTopRated);
moviesTopRated.forEach(function ())*/
    for (var i = 0; i < 4; i++) {
        var title = moviesTopRated.results[i].title;
        var urlPoster = imageBase + 'w300' + moviesTopRated.results[i].poster_path;
        var overView = moviesTopRated.results[i].overview;
        var urlPoster = moviesTopRated.results[i].poster_path;
        if ((urlPoster == "null") || (urlPoster == null) || (urlPoster == undefined)) {
            urlPoster = "http://placehold.it/300x450";
        } else {
            urlPoster = imageBase + 'w300' + urlPoster;
        }
        var id = moviesTopRated.results[i].id;
        var movieData = new SaveMovies(title, urlPoster, release, overview, id);
        topMovies.push(movieData);
    }
}
/** Display details of the selected movie */
function displayDetails() {

}