let startTime = 0;
let updatedTime = 0;
let elapsedTime = 0;
let interval;
let running = false;
const timerElement = document.getElementById("timer");
const lapsList = document.getElementById("laps");

document.getElementById("startBtn").onclick = start;
document.getElementById("pauseBtn").onclick = pause;
document.getElementById("resetBtn").onclick = reset;
document.getElementById("lapBtn").onclick = addLap;

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 10);
  }
}

function pause() {
  running = false;
  clearInterval(interval);
}

function reset() {
  running = false;
  clearInterval(interval);
  elapsedTime = 0;
  timerElement.textContent = "00:00:00.000";
  lapsList.innerHTML = "";
}

function addLap() {
  if (!running) return;
  const lapTime = document.createElement("li");
  lapTime.textContent = timerElement.textContent;
  lapsList.appendChild(lapTime);
}

function updateTime() {
  updatedTime = Date.now() - startTime;
  elapsedTime = updatedTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let milliseconds = elapsedTime % 1000;

  timerElement.textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${milliseconds.toString().padStart(3,'0')}`;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}
