



function countdown() {
    const newYear = new Date("1 jan 2021");
const currentDate = new Date();
  const totalSeconds = (newYear - currentDate) / 1000
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  
  document.getElementById("day1").innerHTML = days ;
  document.getElementById("hour1").innerHTML = hours;
  document.getElementById("minute1").innerHTML = minutes;
  document.getElementById("second1").innerHTML = seconds;
  
}
countdown();
setInterval(countdown, 1000);