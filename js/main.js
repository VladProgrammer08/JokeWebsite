window.onload = function () {
    let randomJokeButton = document.querySelector("#get_random_joke");
    randomJokeButton.onclick = getJoke;
};
function getJoke() {
    let randomJokeUrl = "http://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";
    fetch(randomJokeUrl)
        .then((response) => response.json())
        .then((jsonData) => {
        console.log(jsonData);
    });
}
