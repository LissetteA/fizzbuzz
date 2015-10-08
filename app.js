$(document).ready(function() {
	/*alert("Supply a number!");*/
	var userInput = 100;

	$('#submit').click(function(e) {
		e.preventDefault();
		userInput = +$("#number").val(); 
		// console.log(userInput);
		if (userInput % 1 != 0) {
			alert("Enter in a whole number!");
		}
		else {
			fizzBuzz();
		}
	});

	
	function fizzBuzz() {
		for (var i=1; i <= userInput; i++)
		{
		    if (i % 3 == 0 && i % 5 == 0)
		        console.log("FizzBuzz");
		    else if (i % 3 == 0)
		        console.log("Fizz");
		    else if (i % 5 == 0)
		        console.log("Buzz");
		    else
		        console.log(i);
		}
	}



/*
X 1. on page load, alert user to supply number
X 2. on click button, console.log something as a test
X 3. on click button, console.log input from the form
X 4. convert input string to integer using + symbol
X 5. Validate user input as integer 
5a. Validate user input as non decimal
6. Modify fizzbuzz and count until you reach the number the user gives
6. 
if input isn't a number
alert that this requires  a number
else
run fizzbuzz


Challenge:
1. Add unordered list in the HTML, leave it blank
2. Append numbers as list items instead of console logging numbers
*/

});
