bodyColor = document.querySelector('body');
startBtn = document.querySelector('button[data-start]');
stopbtn = document.querySelector('button[data-stop]');

let timerId = null;

// onStart();
startBtn.addEventListener('click', onStart);
stopbtn.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  startBtn.setAttribute('disabled', true);
  stopbtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(timerId);
  stopbtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}
