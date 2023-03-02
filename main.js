let movieNameRef = document.getElementById("movie-name");
let searchbtn = document.getElementById("search-btn");
// let result = document.getElementById("result");
const resultContainer = document.querySelector('#result');

// fetching data from api

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName} & apikey=${key}`;

    // if input is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg"> Please Enter a Movie Name</h3>`;
    }

    // if input field is not empty
    else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {

                // if movie exists in the database

                if(data.Response == 'True'){
                    result.innerHTML = `
                  
                <div class="info">
                    <img src=${data.Poster} class="poster">            
                    <div class="movie-descrip">
                        <h2>${data.Title}</h2>
                        <p>Released: ${data.Released}</p>
                        <p>Runtime: ${data.Runtime}</p>
                        <p>Genre: ${data.Genre}</p>
                        <p>Rating:<i class="fa-solid fa-star-half-stroke"></i> ${data.imdbRating}</p>
                        <p>Language: ${data.Language}</p>
                    </div>
                    
                </div>
                <div class="plot">
                    <h2>Plot</h2>
                       <p>${data.Plot}</p>
                       <h2>Actors</h2>
                       <p class="actors">${data.Actors}</p>
                </div>
                `;
                }
          
                // if movies does not exist in database
                else{
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                };
                  
            })

            // if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
            });
    }
};

searchbtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);