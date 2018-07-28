// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	
	var commandArray = [];
	var result;
		
	var COMMAND_ADD = 'ADD',
		COMMAND_REMOVE_PHONE = 'REMOVE_PHONE',
		COMMAND_SHOW = 'SHOW';
	
	commandArray = command.split(' ');
	if (COMMAND_ADD === commandArray[0]) {
		result = addContact(commandArray);
	} else if (COMMAND_REMOVE_PHONE === commandArray[0]) {
		result = removePhone(commandArray);
	} else if (COMMAND_SHOW === commandArray[0]) {
		result = showPhoneBook();
	}
	//console.log(command);
	//console.log(phoneBook);
	//console.log(result);
	return result;

};

function addContact(commandArray) {
	
	var	listPhone = commandArray[2].split(',');
	

		if (phoneBook.hasOwnProperty(commandArray[1])) {
			for (var i = 0; i < listPhone.length; i++) {
				if (!phoneBook[commandArray[1]].includes(listPhone[i])) { 
					phoneBook[commandArray[1]].push( listPhone[i]);
				}
			}
        } else {
            phoneBook[commandArray[1]]=listPhone;
        }
	
	return phoneBook;
}

function removePhone(commandArray) {

	var result = false;
	
	for (var key in phoneBook) {
		if (phoneBook[key].includes(commandArray[1])) {
			result = true;
			indexRemoved = phoneBook[key].indexOf(commandArray[1]) 
			var removed = phoneBook[key].splice(indexRemoved,1)    // replace(commandArray[1],'').replace(',,',',');
		}
	}

	return result;
}

function showPhoneBook() {
	
	var result = [];

	for (var key in phoneBook) {
		if (phoneBook[key].length !== 0) {
			result.push(key + ': ' + phoneBook[key].join(', '));
		}
	}
	
	return result.sort();
}
