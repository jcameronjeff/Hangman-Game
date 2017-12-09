$(document).ready(function() {
  
          // make my alphabet array
           var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
  
           var wordBank = ["ANIMAL", "ADDRESS", "TORTUGA"];
  
           //random word is set
           var wordGoal = wordBank[Math.floor(Math.random() * wordBank.length)];
  
          var underlines = [];
  
          var guessesCounter = 0;
  
          document.getElementById('guesses').innerHTML = "Guesses: " + guessesCounter;
          
  
           //  For loop that makes underlines in an array matching wordGoals length
             
  
    function printUnderlines () {
      for (var i = 0; i < wordGoal.length; i++){
          var underline = "_ ";
          underlines.push(underline);}
  
  
      for (var i = 0; i < underlines.length; i++){
        var underline =$("<li>").addClass("unguessed");
        underline.text(underlines[i]);
        $("#display" ).append( underline);}
      };
  
      printUnderlines ()
  
      // console.log(underlines);
      
  
        function letterButtons () {
          for (var i = 0; i < letters.length; i++){
          var letterBtn = $("<button>").addClass("letter-button letter letter-button-color");
            letterBtn.attr("data-letter", letters[i]);
            letterBtn.text(letters[i]);
            $("#buttons" ).append( letterBtn);
          }
  
        };
  
        letterButtons();
  
  
          $(".letter-button").on("click", guesser);
  
          function guesser () {
              
              
              var guessed = this.getAttribute("data-letter");
              if (wordGoal.indexOf(guessed) > -1) {
                  var rightGuess = $("<li>");
                          rightGuess.addClass("letter");
                          rightGuess.text($(this).attr("data-letter"));
                      
              }   
              else {
                  var wrongGuess = $("<li>");
                   wrongGuess.addClass("letter");
                  wrongGuess.text($(this).attr("data-letter"));    
                   $("#wrong").append(wrongGuess);
                   $("guessesCounter")++;
              }
          }
  
  
  
  
          });
  