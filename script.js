$(document).ready(function() {

  console.log("T");

  // var countdown = function(){
  //     var sttime = 30;

  //     var cdtime = sttime;
  //     // for(cdtime = sttime; cdtime--; cdtime > 0) {
  //     setInterval(minusint,1000);
  //     // }
      
  //     return cdtime;
  // }

  // function minusint() {
  //   countdown(cdtime) = countdown(cdtime);
  //   countdown(cdtime)--;
  // }
    


  // console.log(countdown());


  // $("#countdowntime").append(countdown());

  function countdown(tm) {
    var si = setInterval(function () {
      tm = $("#countdowntime").text();
      console.log(tm);
      if(tm < 0) {
        clearInterval(si);
      }
    },1000)
    return tm
  }

  $("#countdowntime").append(countdown());


});