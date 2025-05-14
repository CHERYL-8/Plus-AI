function showSong(response) {
    new Typewriter("#song", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: ""
    });  
}

function generateSong(event) {
    event.preventDefault();
    let user = document.querySelector("#userInput");
    let prompt = `Generate a song about the ${user.value}`;
    let context = "you are a creative and an excellent song composer,generate a song that has a verse and a chorus,the lyrics of the song should be in a seperate line,make sure to follow the user instructions,sign 'Ugwueze Obioma AI' at the end of the song in italics using the color code #ff4d00";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=c8c71f823b69ab4b8b86o3a0f1d320t8`;
    axios.get(apiUrl).then(showSong);
}
let inputForm = document.querySelector("#songForm");
inputForm.addEventListener("submit",generateSong);