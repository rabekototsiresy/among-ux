let mouse = document.querySelector('#mouse');
document.addEventListener('mouseover',(e)=>{
    mouse.style.left = `${e.clientX+2}px`;
    mouse.style.top = `${e.clientY}px`;
    console.log(e.clientX,e.clientX);
});

const board = document.getElementById("board");

let isDrawing = false;

board.addEventListener("mousedown", () => {
  isDrawing = true;
});

board.addEventListener("mouseup", () => {
  isDrawing = false;
});

board.addEventListener("mousemove", event => {
  if (isDrawing) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    board.appendChild(circle);
  }
});

var audio = document.getElementById("audio");
audio.volume = 0.5;

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", function() {
	audio.play();
});
const emailField = document.querySelector('#email');
const subjectlField = document.querySelector('#subject');
const btnSubmitContact = document.querySelector('#submitContact');
btnSubmitContact.addEventListener('click',(e) => {
  e.preventDefault();
  const email = emailField.value;
  const subject = subjectlField.value;
  if(!email || !subject) alert('champs obligatoire!! :-(');
  else alert('envoyé');
})


