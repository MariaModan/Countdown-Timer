
const button = document.getElementById("btn");

//turns milliseconds into mm:ss format
function msToTime(ms){
  var min = Math.floor(ms / 60000);
  var sec = Math.floor((ms-min*60000)/ 1000);
  return min + ":" + sec;
}

//switches the button color and text
function switchBtn(btn){
  btn.classList.toggle("stop");
  if(btn.innerHTML === "Pause"){
    btn.innerHTML = "Restart";
    return 1;
  }
  if(btn.innerHTML === "Start" || "Restart"){
    btn.innerHTML = "Pause";
    return 1;
  }
  
}

button.addEventListener("click", function(){

  switchBtn(button);
  
  const min = document.getElementById("min").value;
  const sec = document.getElementById("sec").value;

  const startTime = (new Date()).getTime();
  const endTime = startTime+ min*60000 +sec*1000;
  var dif = endTime - startTime;

  

  function countDown(num){
    let currentTime = (new Date()).getTime();
    let clock = endTime - currentTime;
    
    if (clock < 1000){
      clearInterval(timer);
    }
    if (!button.classList.contains("stop")){
      clearInterval(timer);
    }

    let newSec = msToTime(clock).split(":")[1];
    if (newSec.length ===1 ){
      newSec = '0' + newSec;
    }
    let newMin = msToTime(clock).split(":")[0];
    if (newMin.length ===1 ){
      newMin = '0' + newMin;
    }


    document.getElementById("sec").value = newSec;
    document.getElementById("min").value = newMin;

    return msToTime(clock);
  }

  let timer = setInterval(countDown, 1000);
});


