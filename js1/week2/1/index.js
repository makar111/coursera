/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arrayTweetWords = []
	    arrayTweetHashTags = [];
		
	arrayTweetWords = tweet.split(" ");

	arrayTweetWords.forEach(filterTweetHashTags);
	

	function filterTweetHashTags(word, index) {
		if (word.indexOf('#') !== -1) {
			arrayTweetHashTags.push(word.slice(1));
		}

	}
	
	return arrayTweetHashTags;
    
};
