function showSong(response) {
    new Typewriter("#song", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
    });  
}
let formElement = document.querySelector("#song-form");
formElement.addEventListener("submit",generateSong);

function generateSong(event) {
    event.preventDefault();
    let user = document.querySelector("#user-input");
    let apiKey = "c8c71f823b69ab4b8b86o3a0f1d320t8";
    let prompt = (`user input:Generate a song about the ${user.value}`);
    let context = ("you are a creative and an excellent song composer.generate a 10 line song in basic html.seperate using <br/>.sign 'Ugwueze Obioma AI' at the end of the song in italics using the color code #ff4d00.");
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
    
    let songElement = document.querySelector("#song");
    songElement.classList.remove("hidden");
    songElement.innerHTML = `<div class="processing">⌛Generating the song about ${user.value}</div>`
   
       axios.post('https://api.shecodes.io/ai/v1/generate', {
        prompt: prompt,
        context: context,
        key: apiKey
    })
    .then(showSong)
    .catch(error => {
        console.error('Error generating song:', error);
    }); 
}
