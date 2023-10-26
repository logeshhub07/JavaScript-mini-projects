const days = document.querySelector("#Days")
const hours = document.querySelector("#Hours")
const minutes = document.querySelector("#Minutes")
const seconds = document.querySelector("#Seconds")
function timer(){
  const currentYear = new Date().getFullYear();
  const devali = new Date(`November 12 ${currentYear} 00:00:00`);
  const currentDate = new Date();
  const diff = devali-currentDate;
  const day = Math.floor(diff/1000/60/60/24)
  const hour = Math.floor((diff/1000/60/60)%24)
  const minute = Math.floor((diff/1000/60)%60)
  const second = Math.floor((diff/1000)%60)
  // console.log(days, hours, minutes, seconds)
  days.innerHTML=day<10?"0"+day:day;
  hours.innerHTML=hour<10?"0"+hour:hour;
  minutes.innerHTML=minute<10?"0"+minute:minute;
  seconds.innerHTML=second<10?"0"+second:second;
}

setInterval(timer,1000)

