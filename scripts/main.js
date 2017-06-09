/* VARIABLES */

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

// Variables for API Key
var apiKey = "api_key=1788420828765e6eb1a60d9453e534d1"; // api Key 
//var Req; // variable that will store requests
var imageBase = 'http://image.tmdb.org/t/p/';
var apiBase = 'http://api.themoviedb.org/3';

// Function for calling the Most Popular Movie API 
function MostPopular() {
    //want this funtion to go on load as well 
    baseUrl_Image();

    var urlPopular = apiBase + '/movie/popular?' + apiKey;
    //setting up the new request
    var xhr = new XMLHttpRequest();

    document.getElementById("result").innerHTML = 'Most Popular';
    document.getElementById("moviePosters").innerHTML = '';
    // making the request
    // figure out how to make these less than PG13 ratings only!!
    xhr.open('GET', encodeURI(urlPopular));
    xhr.onload = function() {
        if (xhr.status === 200) {
            // read the data in the JSON 
            var mydata = JSON.parse(xhr.responseText);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }

        console.log(mydata);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;
        // only display top 3 movies
        for (var i = 0; i < 3; i++) {
            // variables for the details... need to store these to a different array?? OR need to make a seperate call?
            /*var movies_title = mydata.results[i].original_title;
            var movies_overview = mydata.results[i].overview;
            var movies_votes = mydata.results[i].vote_average;
            var movies_rating = mydata.results[i].*/

            var posters = mydata.results[i].poster_path;
            // creating the image to display  & everything to hold it
            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            var div = document.getElementById('moviePosters');
            var imgDiv = document.createElement('div')
            imgDiv.className = "col-md-7 movie_poster";
            var img = document.createElement('img');
            // actually setting the image 
            img.setAttribute('src', posters_Url);
            imgDiv.appendChild(img);

            // set the data for each movie to display for the details page 
            // setMovieDetails(mydata.results[i]);
            /*
                        WANT THIS TO BE IN THE DETAILS OVERLAY 
                        var node = document.createElement("div");
                        node.className = "col-md-5 movie_desc ";
                        var textnode = document.createTextNode(movies_title);
                        var textOverview = document.createTextNode(movies_overview);
                        var textVote = document.createTextNode(movies_votes);
                        var textRatting = document.createTextNode('Ratings ');

                        node.appendChild(textnode);
                        //headingforMovies.appendChild(textnode);
                        node.appendChild(document.createElement('br'));
                        node.appendChild(document.createElement('br'));
                        node.appendChild(textRatting)
                        node.appendChild(textVote);
                        node.appendChild(document.createElement('br'));
                        node.appendChild(document.createElement('br'));
                        node.appendChild(textOverview);

                        //console.log(mydata.results[i].original_title);
                         document.getElementById("moviePosters").appendChild(node);
*/
            document.getElementById("moviePosters").appendChild(imgDiv);
        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

// Config function for Movie Poster API. 
function baseUrl_Image() {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'BaseURL';
    document.getElementById("moviePosters").innerHTML = '';

    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/configuration?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }

        movies_image_url = mydata.images.base_url;
        console.log(movies_image_url);
        movies_posters_sizes = mydata.images.poster_sizes[2];
        console.log(movies_posters_sizes);
    };
    xhr.send();
    //return movies_image_url;
};

function setMovieDetails() {
    var movies_title = mydata.results[i].original_title;
    var movies_overview = mydata.results[i].overview;
    var movies_votes = mydata.results[i].vote_average;
}

function displayMovieDetails() {

}