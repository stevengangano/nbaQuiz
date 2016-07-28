var sportsQuestions = [
	{	question: " 1) Which NBA player was nicknamed the mailman?", //0
		answer: "Karl Malone"
	},	
	{	
		question: "2) Which NBA starting point guard played 1 year at Duke?", //1
		answer: "Kyrie Irving"
	},
	{
		question:"3) Who wears number 23 for the Golden State Warriors?" , //2
		answer: "Draymond Green"
	},
	{	
		question:"4) Which NBA team won 3 championships during the 2000 era?", //3
		answer: "Los Angeles Lakers"
	},
	{	
		question:"5) Which NBA player was nicknamed 'The Admiral'?", //4
		answer: "David Robinson"
	},
	{
		question:"6) Which NBA player holds the record for the most 3 pointers in a single season? ",
		answer: "Stephen Curry" 
	}

]

// Assign question to the id
for (var i = 0; i < sportsQuestions.length; i++) {
	q = sportsQuestions[i].question 
	document.getElementById("question" + [i]).innerHTML = q
}


function getInfo () {
	var correct = 0 // counter starts at 0
	var incorrect = 0 // counter starts at 0
	for(var i = 0; i < sportsQuestions.length; i++) { // loops through the whole array
		var Answer = sportsQuestions[i].answer // this is the answer
		var userAnswer = document.getElementById("answer" + [i]).value// this is users answer
		var questionResults = document.getElementById("question" + [i]) // this is the question
	 if (userAnswer.toLowerCase() == Answer.toLowerCase()) { // lowercase must match 
	 	questionResults.className = "correct" // adds the color white
	 	correct++ // adds 1 to the counter
	 } else {
	 	questionResults.className = "incorrect" // adds the color red
	 	incorrect++ // adds 1 to the counter
	 } // end else
	 } // end for
	 document.getElementById("correct").textContent = correct 
	 document.getElementById("incorrect").textContent = incorrect
		if (correct == 6) {
			alert ('Congratulations!')
		}
} // end function


// Submits answer when enter is pressed
for (var i = 0; i < sportsQuestions.length; i++) {
	a = document.getElementById("answer" + [i])
	a.setAttribute('onkeydown', "return searchKeyPress(event)")
};

function searchKeyPress(e) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('button').click();
        return false;
    }
    return true;
}

// Clear button
function clearButton () {
	for (var i = 0; i < sportsQuestions.length; i++) {
	document.getElementById("answer" + [i]).value = ''
	document.getElementById('question' + [i]).className = 'black'
	}
	document.getElementById("correct").textContent = 0 
	document.getElementById("incorrect").textContent = 0
}