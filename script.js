$(document).ready(function() {

  //cheeky consolelog

  console.log("T");

  //timer 

  function countdown(tm) {
    var tm = 30;
    var si = setInterval(function setint() {
      tm--;
      $("#countdowntime").text(tm);
      console.log("inside tm " + tm);
      if(tm <= 0) {
        clearInterval(si);
      }
    },1000)
  }

  $("#countdowntime").append(countdown());


















});