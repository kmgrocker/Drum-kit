window.addEventListener("keydown", play);

//select the audio tag
const composition = [];
// let beat;
function play(e) {
  // //select the audio tag
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  //selecting the key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  composition.push(e.keyCode);
  const playBtn = document.querySelector(".play");
  const stopBtn = document.querySelector(".pause");
  playBtn.addEventListener("click", playComp);
  console.log(composition);
  function playComp(e) {
    let beat;
    let count = 0;
    composition.forEach(keyCode => {
      console.log(keyCode);
      beat = setInterval(() => {
        if (count > 100) clearInterval(beat);
        audio.play();
        count++;
      }, 500);
    });
    // setTimeout(() => {
    //   clearInterval(beat);
    // }, 3000);
  }
  stopBtn.addEventListener("click", () => {
    location.reload();
  });

  // eleminating other key which is not in our drum key

  if (!audio) return;

  audio.currentTime = 0; //rewind to the start

  audio.play();

  key.classList.add("playing");

  // firing the event when transition end

  const keys = document.querySelectorAll(".key"); //giv all our drum key in array
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  function removeTransition() {
    key.classList.remove("playing");
  }
}



