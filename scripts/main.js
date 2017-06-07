/* VARIABLES */
// Set up request status code 
const NOT_FOUND = 404;
const OK = 200;
const BAD = 400;

var apiKey = "1788420828765e6eb1a60d9453e534d1"; // api Key 
var Req; // variable that will store requests

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

/** Request top rated movies*/
function request_TopRatedMovies() {
    //URL: /discover/movie?sort_by=popularity.desc

}
/** Display only 3 top movies */

/** Display details of the selected movie */
function displayDetails() {

}