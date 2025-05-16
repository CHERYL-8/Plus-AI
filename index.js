function showSong(response) {
    console.log(response);
    new Typewriter("#song", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: ""
    });  
}

function generateSong(event) {
    event.preventDefault();
    let user = document.querySelector("#user-input");
    let apiKey = "c8c71f823b69ab4b8b86o3a0f1d320t8";
    let prompt = `user input:Generate a song about the ${user.value}`;
    let context = "you are a creative and an excellent song composer.generate a song in basic html.seperate using <br/>.the song should have a chorus.make sure to follow the user input.sign 'Ugwueze Obioma AI' at the end of the song in italics using the color code #ff4d00.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
    axios.get(apiURL).then(showSong);
}
let formElement = document.querySelector("#song-form");
formElement.addEventListener("submit",generateSong);