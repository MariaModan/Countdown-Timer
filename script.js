const button = document.getElementById("btn");
let isTimerOn = false;

//switches the button color and text
function switchBtn(btn){
  isTimerOn = !isTimerOn;
  btn.classList.toggle("in-progress");
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

  function countdown2(){
    let min = parseInt(document.getElementById("min").value);
    let sec = parseInt(document.getElementById("sec").value);

    if (min === 0 && sec === 0){
      clearInterval(timer);
    }
    if (!isTimerOn){
      clearInterval(timer);
    }
    if (sec === 0){
        sec = 59;
        min = min-1;
    }
    else{
        sec = sec-1;
    }
    if(sec<10){
      sec = '0' + sec;
    }
    if(min<10){
      min= '0' + min;
    }
    document.getElementById("sec").value = sec;
    document.getElementById("min").value = min;
  }


  let timer = setInterval(countdown2, 1000);
});
