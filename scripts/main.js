/* VARIABLES */

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

            var posters = mydata.results[i].poster_path;
            // creating the image to display  & everything to hold it
            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            // get the HTML element
            var div = document.getElementById('moviePosters');
            // set up HTML for images 
            var imgContainer = document.createElement('div')
            imgContainer.className = "movie_poster"; // class name
            var img = document.createElement('img');
            // actually setting the image 
            img.setAttribute('src', posters_Url);
            //attach the image to the imgContainer section
            imgContainer.appendChild(img);

            // store details about the movie in this array 
            //imageDescription is a property of the imgContainer object 
            imgContainer.imageDescription = mydata.results[i];
            // this function is within the img (selecting) adding method to an instance
            imgContainer.onclick = function() {
                // First Create the overlay page to display the informaion
                var detailDisplay = document.createElement('section');
                //create an id
                detailDisplay.className = "movieDetails";

                // set the title 

                var titleDisplay = document.createTextNode(this.imageDescription.original_title);
                var overviewDisplay = document.createTextNode(this.imageDescription.overview);
                // var ratingVotes = document.createTextNode(this.imageDescription.vote_average);
                var movieGenres = document.createTextNode(this.imageDescription.genre_ids);

                // append what we're working with to the detail display
                this.appendChild(detailDisplay);

                // append the details of the movie to the section
                detailDisplay.appendChild(titleDisplay);
                detailDisplay.appendChild(document.createElement('br'));
                detailDisplay.appendChild(overviewDisplay);
                // detailDisplay.appendChild(ratingVotes);
                detailDisplay.appendChild(document.createElement('br'));
                detailDisplay.appendChild(movieGenres);

                // test the item to display 
                //detailDisplay.innerHTML = "Hello";
                /*
                //console.log(mydata.results[i].original_title);
                document.getElementById("moviePosters").appendChild(node);
                document.getElementById("moviePosters").appendChild(detailDisplay);*/
            }
            document.getElementById("moviePosters").appendChild(imgContainer);
        }
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