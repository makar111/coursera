// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	
	var commandArray = [];
		
	var COMMAND_ADD = 'ADD',
		COMMAND_REMOVE_PHONE = 'REMOVE_PHONE',
		COMMAND_SHOW = 'SHOW';
	
	commandArray = command.split(' ');
	if (COMMAND_ADD === commandArray[0]) {
		return addContact(commandArray);
	} else if (COMMAND_REMOVE_PHONE === commandArray[0]) {
		return removePhone(commandArray);
	} else if (COMMAND_SHOW === commandArray[0]) {
		return showPhoneBook();
	}

};

function addContact(commandArray) {
	
	if (phoneBook.hasOwnProperty(commandArray[1])) {
		if (!phoneBook[commandArray[1]].includes(commandArray[2])) { 
			phoneBook[commandArray[1]] += ',' + commandArray[2];
		}
	} else {
		phoneBook[commandArray[1]]=commandArray[2];
	}
	
//	console.log(showPhoneBook());
	return phoneBook;
}

function removePhone(commandArray) {

	var result = false;
	
	for (var key in phoneBook) {
		if (phoneBook[key].indexOf(commandArray[1]) !== -1) {
			result = true;
			phoneBook[key] = phoneBook[key].replace(commandArray[1],'').replace(',,',',');
		}
	}

//	console.log(commandArray);
//	console.log(phoneBook);
//	console.log(result);

	return result;
}

function showPhoneBook() {
	
	var result = [];

	for (var key in phoneBook) {
		
		//add test for empty list of phone
		if (phoneBook[key] !== '') {
			result.push(key + ': ' + phoneBook[key].replace(/,/g, ', '));
		}
	}

	return result.sort();
}
