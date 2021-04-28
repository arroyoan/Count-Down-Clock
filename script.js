const revealDate = new Date(2021,4,10,12,0,0);
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setTime();

// helper functions

function setTime(){
  var currentTime = new Date();
  var elapsedTime = revealDate-currentTime;
  
  console.log(elapsedTime);
  //(Math.trunc(elapsedTime/1000))
  if( elapsedTime < 0){
    console.log("here");
    clearInterval(countdown);
  }

  day.innerHTML = addZero(Math.trunc(elapsedTime/(24*60*60*1000)));
  elapsedTime = elapsedTime%((24*60*60*1000));

  hour.innerHTML = addZero(Math.trunc(elapsedTime/(60*60*1000)));
  elapsedTime = elapsedTime%(60*60*1000);

  minute.innerHTML = addZero(Math.trunc(elapsedTime/(60*1000)));
  elapsedTime = elapsedTime%(60*1000);

  second.innerHTML = addZero(Math.trunc(elapsedTime/(1000)));
}

function addZero(number){
  if(number < 9){
    return "0" + number;
  }
  return number.toString();
}

// runs the js
//
var countdown = setInterval(setTime,1000);