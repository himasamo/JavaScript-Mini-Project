const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const minuets = document.querySelector('.minuets');
const secounds = document.querySelector('.secounds');
let timerTime = 00;
let isRunning = false;
let interval;


function startTimer(){
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(counter, 1000);
}
function stopTimer(){
  if (!isRunning) return;
  isRunning = false;
  clearInterval(interval);
}
function resetTimer(){
  stopTimer();
  timerTime = 0;
  minuets.innerText = '00';
  secounds.innerText = '00';
}
function counter(){
  timerTime++;
  const numOfMinuts = Math.floor(timerTime / 60);
  const numOfSecond = timerTime % 60;
  minuets.innerText = pad(numOfMinuts);
  secounds.innerText = pad(numOfSecond);
}
function pad(number){
  return (number < 10) ? '0' + number : number;
}
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
