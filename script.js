const startTime = (new Date()).getTime();
const min = 0;
const sec = 5;
const endTime = startTime+ min*60000 +sec*1000;

var dif = endTime - startTime;

function msToTime(ms){
  var min = Math.floor(ms / 60000);
  var sec = Math.floor((ms-min*60000)/ 1000);
  return min + ":" + sec;
}

function countDown(num){
  let currentTime = (new Date()).getTime();
  let clock = endTime - currentTime;
  if (clock == 0){
    clearInterval(timer);
  }
  console.log(msToTime(clock));
  return currentTime;
}

let timer = setInterval(countDown, 1000);
