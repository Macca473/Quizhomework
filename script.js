$(document).ready(function() {

  //cheeky consolelog

  console.log("T");

  //timer 

  function countdown(tm) {
    var tm = 30;
    var si = setInterval(function setint() {
      tm--;
      $("#countdowntime").text(tm);
      // console.log("inside tm " + tm);
      if(tm <= 0) {
        clearInterval(si);
      }
    },1000)
  }

  $("#countdowntime").append(countdown());

  //////////////////////////////Correct Answer

  function answercheck() {
    var tf = false;
    var correct = ["4"
                  ,"what? that makes no sense"
                  ];

    if ($("cli").text() = 4) {
      tf = true };
      return tf
  }

  

  //////////////////////////////Question

  function questionarray() {
    var question = ["how many legs does a cat have?"
                   , "how many cats does a leg have?"
                   ];
    $("#ques").text(question[0]);
    console.log(question[0]);
    
  }

  $("#ques").append(questionarray());

  //////////////////////////////Answer 0

  $("#answ0").click(function() { 
    console.log("clicked Answer 0");
    $("#answ0").toggleClass("cli");
    console.log("answer " + answercheck());
  });

  function answer0array() {
    var answer0 = ["1"
                  ,"3"
                  ];
    $("#answ0").text(answer0[0]);
    console.log(answer0[0]);
  }

  $("#answ0").append(answer0array());

  //////////////////////////////Answer 1

  $("#answ1").click(function() { 
    console.log("clicked Answer 1");
    $("#answ1").toggleClass("cli");
    console.log("answer " + answercheck());
  });

  function answer1array() {
    var answer1 = ["4"
                  , "12"
                  ];
    $("#answ1").text(answer1[0]);
    console.log(answer1[0]);
  }

  $("#answ1").append(answer1array());

  //////////////////////////////Answer 2

  $("#answ2").click(function() { 
    console.log("clicked Answer 2");
    $("#answ2").toggleClass("cli");
    console.log("answer " + answercheck());
  });

  function answer2array(num) {
    var answer2 = ["9"
                  , "43"
                  ];
    $("#answ2").text(answer2[0]);
    console.log(answer2[0]);
  }

  $("#answ2").append(answer2array());

  //////////////////////////////Answer 3

  $("#answ3").click(function() { 
    console.log("clicked Answer 3");
    $("#answ3").toggleClass("cli");
    console.log("answer " + answercheck());
  });

  function answer3array(num) {
    var answer3 = ["5"
                  , "what? that makes no sense"
                  ];
    $("#answ3").text(answer3[0]);
    console.log(answer3[0]);

  }

  $("#answ3").append(answer3array());
















});