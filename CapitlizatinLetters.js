//Problem: Normalize any input to be first letter capitalize.
 // example: "life is good"
// split the words and store them in Array
// find the first letter in each words
// for each word to check them all
// join the words in secntences
// convert the fist letter to Uppercase and the rest is smaller letter.


let input = " life is good";



function convertTotilte (input) {
	var words = input.split(' ');
	var result = [];
	for (var i = 0; i < words.length; i++) {
		 var letter = words[i].slice(0,1).toUpperCase();
		result.push(letter + words[i].slice(1).toLowerCase());
	}
	return result.join(' ');
}


convertTotilte(input)
