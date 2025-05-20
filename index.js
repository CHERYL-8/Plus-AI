function showSong(response) {
  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });

  let submitButton = document.querySelector('#command')
  submitButton.removeAttribute('disabled');
}


function generate(event) {
  event.preventDefault();
  let apiKey = "c8c71f823b69ab4b8b86o3a0f1d320t8";
  let context =
    "you are a creative and an excellent song composer. Generate a 10 line song in basic HTML. Separate using <br/>. Sign 'Ugwueze Obioma AI' at the end of the song in italics using the color code #ff4d00.";
  let user = document.querySelector("#user-input");
  let prompt = `User input: Generate a song about ${user.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;
  let submitButton = document.querySelector('#command')
  submitButton.setAttribute('disabled', 'disabled');

  let songElement = document.querySelector("#song");
	songElement.classList.remove("hidden");
  songElement.innerHTML = `<div class="processing">⏳ Generating a poem about ${user.value}..</div>`;
  axios.get(apiUrl).then(showSong);
}

let formElement = document.querySelector("#song-form");
formElement.addEventListener("submit", generate);
