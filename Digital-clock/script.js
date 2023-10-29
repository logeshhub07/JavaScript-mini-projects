const clock = document.querySelector('.clock')
function runClock(){
  var time = new Date();
  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()
  console.log(hours, minutes, seconds)
  var noon = "AM";
  if (hours > 12){
    noon = "PM";
    hours = hours - 12;
  }else if(hours==0){
    hours=12;
    noon="AM";
  }
  
  hours = hours<10?'0'+hours:hours;
  seconds = seconds<10?'0'+seconds:seconds;
  minutes = minutes<10?'0'+minutes:minutes;
  clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${noon}`
 
}

  
runClock();
setInterval(runClock,1000)