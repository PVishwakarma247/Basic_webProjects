var t =0;
var timerId;
var timerRuning = false;

function getTime() {
  X = document.getElementById("hrs");
  Y = document.getElementById("min");
  hrs = X.value;
  min = Y.value;

  // Total time in seconds
  window.t = hrs*3600 + min*60;
  window.per = window.t;
}

function timer() {
  timerRuning = true;
  var temp = window.t;
  window.t = window.t-1;
  var h = Math.floor(temp/3600);
  var m = Math.floor((temp%3600)/60);
  var s = Math.floor(temp - h*3600 - m*60);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("display").style.border = "1px solid black";

  timerId = setTimeout(timer, 1000);

  if (temp<0) {
    clearInterval(t);
    document.getElementById("display").innerHTML = "Expired";
    timerRuning = false;
  }
}

function checkTime(i) {
  if (i<10) { i = "0" + i}
  return i;
}

function startTimer() {
  if(!timerRuning) {
    getTime();
  }
  timer();
}

function stopTimer() {
  clearInterval(timerId);

  var temp = window.t;
  var h = Math.floor(temp/3600);
  var m = Math.floor((temp%3600)/60);
  var s = Math.floor(temp - h*3600 - m*60);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
}

function resetTimer() {
  clearInterval(timerId);
  timerRuning = false;
  document.getElementById("display").innerHTML = " ";
  document.getElementById("display").style.border = "none";

}