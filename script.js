$(document).ready(function() {

  //cheeky consolelog

  console.log("T");

  //////////////////////////////Answer Check

  var selec = "ph";

  //////////////////////////////Question Number

  var Quesnum = 0;

  //////////////////////////////

  restart();

  //////////////////////////////timer 

  function countdown(tm) {
    var tm = 30;
    var si = setInterval(function setint() {
      tm--;
      $("#countdowntime").text(tm);
      tm = $("#countdowntime").text();
      // console.log("inside tm " + tm);
      if(tm == 0) {
        tm = 30;
        $("#countdowntime").text(tm);
        restart();
        // clearInterval(si);
        }
      else if($(".cli").text() !== "") {
        tm = 30;
        $("#countdowntime").text(tm);
        }
      $(".cli").removeClass("cli");
    },500)
    // si();
  }

  $("#countdowntime").append(countdown());

  //////////////////////////////Question

  function questionarray() {
    var question = [ "Click below to begin"
                   , "how many legs does a cat have?"
                   , "how many cats does a leg have?"
                   ];
    $("#ques").text(question[Quesnum]);
    console.log(question[Quesnum]);
    
  }

  $("#ques").append(questionarray());

  //////////////////////////////Answer 0

  $("#answ0").click(function() { 
    console.log("clicked Answer 0");
    $("#answ0").toggleClass("cli");
    selec = $("#answ0").text();
    answercheck();
    console.log("answer " + selec + " ");
  });

  function answer0array() {
    var answer0 = ["Click me"
                  ,"1"
                  ,"3"
                  ];
    $("#answ0").text(answer0[Quesnum]);
    console.log(answer0[Quesnum]);
  }

  $("#answ0").append(answer0array());

  //////////////////////////////Answer 1

  $("#answ1").click(function() { 
    console.log("clicked Answer 1");
    $("#answ1").toggleClass("cli");
    selec = $("#answ1").text();
    answercheck();
    console.log("answer " + selec + " ");
  });

  function answer1array() {
    var answer1 = [""
                  ,"4"
                  ,"12"
                  ];
    $("#answ1").text(answer1[Quesnum]);
    console.log(answer1[Quesnum]);
  }

  $("#answ1").append(answer1array());

  //////////////////////////////Answer 2

  $("#answ2").click(function() { 
    console.log("clicked Answer 2");
    $("#answ2").toggleClass("cli");
    selec = $("#answ2").text();
    answercheck();
    console.log("answer " + selec + " ");
  });

  function answer2array(num) {
    var answer2 = [""
                  ,"9"
                  ,"43"
                  ];
    $("#answ2").text(answer2[Quesnum]);
    console.log(answer2[Quesnum]);
  }

  $("#answ2").append(answer2array());

  //////////////////////////////Answer 3

  $("#answ3").click(function() { 
    console.log("clicked Answer 3");
    $("#answ3").toggleClass("cli");
    selec = $("#answ3").text();
    answercheck();
    console.log("answer " + selec + " ");
  });

  function answer3array(num) {
    var answer3 = [""
                  ,"5"
                  , "what? that makes no sense"
                  ];
    $("#answ3").text(answer3[Quesnum]);
    console.log(answer3[Quesnum]);

  }

  $("#answ3").append(answer3array());

  //////////////////////////////Answer Check

  function answercheck() {
    var tf = false;
    var correct = ["Click me"
                  ,"4"
                  ,"what? that makes no sense"
                  ];
    console.log("correct answ " + correct[Quesnum]);
      if (selec == correct[Quesnum]) {
        tf = true;
        Quesnum = Quesnum + 1;

      } else if (selec !== correct[Quesnum]) {
        var tf = false;
        restart();
      }
      console.log("ac " + tf);
      questionarray();
      answer0array();
      answer1array();
      answer2array();
      answer3array();
      $("#highscores").text("highscore: " + Quesnum);
      return tf;
  }

  ////////////////////////////// Fail

  function restart() {
    Quesnum = 0;
    questionarray();
    answer0array();
    answer1array();
    answer2array();
    answer3array();
    if (Quesnum === 1) {
      $("#countdowntime").append(countdown());
    }
    return;
  }

  console.log("Quesnum " + Quesnum);















});