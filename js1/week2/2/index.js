/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	
	var	hashtagsUnicLowerCase = [];
	
	hashtags.forEach(doStringHashtags);
	function doStringHashtags(item, index) {
		item = item.toLowerCase();
		if (hashtagsUnicLowerCase.indexOf(item) === -1 && item !== '') {
				hashtagsUnicLowerCase.push(item) ;
		}
		
	}
	
	return 	hashtagsUnicLowerCase.join(', ');

};
