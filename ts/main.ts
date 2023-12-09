window.onload = function(){
    let randomJokeButton = document.querySelector("#get_random_joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke(){
    //let randomJokeUrl = "http://v2.jokeapi.dev/joke/Any?type=single&safe-mode";
    let randomJokeUrl = "http://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";
    fetch(randomJokeUrl)
        .then(
            // Get the response object and return the json data
            (response) => response.json()
        )
        .then(
            (jsonData) => {
                console.log(jsonData);
            }
        )
}

