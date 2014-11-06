
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var secretNum;

  	var newGame = function() {
  		secretNum = Math.ceil(Math.random() * 100);
  		setCount(0);
  		$("#guessList li").remove();
  		setFeedback("Make your Guess!");
  		clearInput();
  	};
  	var clearInput = function() {
  		$("input").val("")	
  	};
  	var setCount = function(num) {
  		$("#count").text(num);
  	};
  	var setFeedback = function(feedback) {
  		$("#feedback").text(feedback);
  	};
  	var guess = function(userGuess) {
  		clearInput();
  		if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 || userGuess % 1 != 0)
  		{
  			setFeedback("Choose an integer between 1 and 100.");
  		}
  		else
  		{
	  		var count = +$("#count").text() + 1;
	  		setCount(count);
	  		var distance = Math.abs(userGuess - secretNum);

	  		$("#guessList").append("<li>" + userGuess + "</li>");
	  		if (distance === 0)
	  		{
	  			setFeedback("You got it!");	
	  			var playAgain = prompt("You got it! Would you like to play again? (\"Yes\" to play again)");
	  			if(playAgain === "Yes")
	  			{
	  				newGame();
	  			}
	  		}
	  		else if (distance <= 10)
	  		{
	  			setFeedback("Very hot!");		
	  		}
	  		else if (distance <= 20)
	  		{
	  			setFeedback("Hot.");	
	  		}
	  		else if (distance <= 30)
	  		{
	  			setFeedback("Warm.");	
	  		}
	  		else if (distance <= 50)
	  		{
	  			setFeedback("Cold.");	
	  		}
	  		else 
	  		{
	  			setFeedback("Ice cold!");	
	  		}
	  	};
  	};
  	newGame();
  	
  	$("form").on("submit", function(event) {
  		event.preventDefault();
  		guess(+$("input").val());
  	});

  	$(".new").on("click", newGame);
});


