function generateSong(event) {
    event.preventDefault();
    new Typewriter("#song", {
       strings: "song song",
       autoStart: true,
       delay: 1,
       cursor: ""
    });
}
let inputForm = document.querySelector("#songForm");
inputForm.addEventListener("submit",generateSong);