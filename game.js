  var WinCounter = 0;
  var AttemptsCounter = 9;
  var LossCounter = 0;

    document.onkeyup = function(event) {

      var userguess = event.key.toLowerCase();
      console.log("userguess");

      $("#display").append(userguess);

      var computerChoice = Math.floor((Math.random() * 26) + 1);
          if (computerChoice <= 1) {
            computerChoice = "a";
        } else if(computerChoice <= 2) {
            computerChoice = "b";
        } else if(computerChoice <= 3) {
            computerChoice = "c";
        } else if(computerChoice <= 4) {
            computerChoice = "d";
        } else if(computerChoice <= 5) {
            computerChoice = "e";
        } else if(computerChoice <= 6) {
            computerChoice = "f";
        } else if(computerChoice <= 7) {
            computerChoice = "g";
        } else if(computerChoice <= 8) {
            computerChoice = "h";
        } else if(computerChoice <= 9) {
            computerChoice = "i";
        } else if(computerChoice <= 10) {
            computerChoice = "j";
        } else if(computerChoice <= 11) {
            computerChoice = "k";
        } else if(computerChoice <= 12) {
            computerChoice = "l";
        } else if(computerChoice <= 13) {
            computerChoice = "m";
        } else if(computerChoice <= 14) {
            computerChoice = "n";
        } else if(computerChoice <= 15) {
            computerChoice = "o";
        } else if(computerChoice <= 16) {
            computerChoice = "p";
        } else if(computerChoice <= 17) {
            computerChoice = "q";
        } else if(computerChoice <= 18) {
            computerChoice = "r";
        } else if(computerChoice <= 19) {
            computerChoice = "s";
        } else if(computerChoice <= 20) {
            computerChoice = "t";        
        } else if(computerChoice <= 21) {
            computerChoice = "u";
        } else if(computerChoice <= 22) {
            computerChoice = "v";
        } else if(computerChoice <= 23) {
           computerChoice = "w";
        } else if(computerChoice <= 24) {
           computerChoice = "x";
        } else if(computerChoice <= 25) {
            computerChoice = "y";
        } else {
            computerChoice = "z";
      }

      console.log("computerChoice");


      var compare = function(choice1,choice2) {
          if (choice1 === choice2) {
              document.getElementById("p1").innerHTML = "You Win!";
              WinCounter++
              document.getElementById("win").innerHTML = WinCounter;
              AttemptsCounter=9;
              $("#display").empty();
          }

          else {
              AttemptsCounter--
              document.getElementById("attempts").innerHTML = AttemptsCounter;
              document.getElementById("p1").innerHTML = "Guess Again!";
              }
          }

          var results = compare(userguess,computerChoice);

              if(AttemptsCounter<=0){
              LossCounter++
              document.getElementById("loss").innerHTML = LossCounter;
              document.getElementById("p1").innerHTML = "You Lose!";
              AttemptsCounter=9;
              $("#display").empty();

          }
         
      };
      
