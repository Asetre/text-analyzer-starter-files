

$('form').submit(function (event) {
	event.preventDefault();
	var hash = {};
	var userText = $('#user-text').val().split(/\s+/);
	wordCount = userText.length;
	var letterCount = 0;
	var avgWordLength;
	
	for (var i in userText) {
		var x = userText[i];
		(hash[x] ? hash[x]++ : hash[x] = 1);
		
	}

	for (var i in userText) {
		letterCount += userText[i].length;
	}

	uniqueWordCount = Object.keys(hash).length;
	avgWordLength = letterCount / userText.length;
	avgWordLength = avgWordLength.toFixed(2);
	console.log(avgWordLength);
	console.log(hash);
	console.log(wordCount);
	

	$('dl').removeClass("hidden");
	$('.js-word-count').append(wordCount);
	$('.js-unique-word-count').append(uniqueWordCount);
	$('.average-word-length').append(avgWordLength);
	

});