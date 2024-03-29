import "./utils/bling.js";

function getCurrentTime(timezone) {
  const now = new Date();
  const options = { timeZone: timezone };
  const timeString = now.toLocaleTimeString('en-US', options);
  const [hours, minutes, seconds] = timeString.split(':').map(part => part.padStart(2, '0'));

  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDate(timezone) {
  const now = new Date();
  const options = { timeZone: timezone };
  const dateString = now.toLocaleDateString('en-US', options);
  const [day, month, year] = dateString.split("/").map(part => part.padStart(2, "0"));
  return `${day}/${month}/${year}`;
}

$("#app").innerHTML = `
   <h1>Hello World</h1>
   <div class='btn-container'>
    <button class="clock-btn" type='button' aria-current="true">Clock</button>
    <button class="timer-btn" type='button'>Timer</button>
   </div>
   <div class="date-time">
    <p class="time"></p>
    <p class="date"></p>
    <select class="timezone">
      <option value="Africa/Lagos">Africa/Lagos</option>
      <option value="Africa/Maputo">Africa/Maputo</option>
      <option value="Africa/Nairobi">Africa/Nairobi</option>
      <option value="UTC">UTC</option>
      <option value="America/New_York">America/New York</option>
      <option value="Europe/London">Europe/London</option>
    </select>
   </div>
   <div class="timer-container">
    <p class="time-t">
      <span class="hours-span"><span class="t-hour">00</span>Hours</span>
      <span class="minutes-span"><span class="t-minutes">00</span>Minutes</span>
      <span class="seconds-span"><span class="t-seconds">00</span>Seconds</span>
    </p>

    <div class="timer-btns">
      <button class="start-timer" type="button">Start</button>
      <button class="pause-timer" type="button">Pause</button>
      <button class="reset-timer" type="button">Reset</button>
    </div>
   </div>
`;

function updateTime() {
  const selectedTimezone = $(".timezone").value;

  $(".time").textContent = `The time is ${getCurrentTime(selectedTimezone)}`;
  $(".date").textContent = `Today's date is ${getCurrentDate(selectedTimezone)}`;
}

updateTime();
setInterval(updateTime, 1000);

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function startTimerFunc() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  $(".t-hour").textContent = String(hours).padStart(2, "0");
  $(".t-minutes").textContent = String(minutes).padStart(2, "0");
  $(".t-seconds").textContent = String(seconds).padStart(2, "0");
}

const startTimer = $(".start-timer");
const pauseTimer = $(".pause-timer");
const resetTimer = $(".reset-timer");

startTimer.on("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    startTimerFunc();
  }, 1000);
});

pauseTimer.on("click", () => {
  clearInterval(timer);
});

resetTimer.on("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  $(".t-hour").textContent = String(0).padStart(2, "0");
  $(".t-minutes").textContent = String(0).padStart(2, "0");
  $(".t-seconds").textContent = String(0).padStart(2, "0");
});

// switch between clock and timer
const clockBtn = $(".clock-btn");
const timerBtn = $(".timer-btn");
const dateTime = $(".date-time");
const timerContainer = $(".timer-container");

clockBtn.on("click", () => {
  timerContainer.style.display = "none";
  timerBtn.setAttribute("aria-current", "false");
  dateTime.style.display = "flex";
  clockBtn.setAttribute("aria-current", "true");
});

timerBtn.on("click", () => {
  timerContainer.style.display = "flex";
  timerBtn.setAttribute("aria-current", "true");
  dateTime.style.display = "none";
  clockBtn.setAttribute("aria-current", "false");
});
