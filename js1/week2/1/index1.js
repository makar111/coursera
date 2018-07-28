/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arrayTweetWords = []
	    arrayTweetHashTags = [];
		
	arrayTweetWords = tweet.split(" ");

	console.log(arrayTweetWords);		
	for (var i = 0; i < arrayTweetWords.length; i++) {
		console.log(arrayTweetWords[i]);
		if (arrayTweetWords[i].indexOf('#') !== -1) {
			arrayTweetHashTags.push(arrayTweetWords[i].slice(1));
		}
	}
	console.log(arrayTweetHashTags);
	return arrayTweetHashTags;
    
};
