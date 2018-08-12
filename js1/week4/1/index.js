/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

	var collectionNew = JSON.parse(JSON.stringify(collection));
	
	for(var i = 0; i < arguments.length; i++) {
		if( arguments[i].name === 'filterIn') {
			collectionNew = arguments[i](collectionNew);
		}
	}

	for(var i = 0; i < arguments.length; i++) {
		if( arguments[i].name === 'select') {
			collectionNew = arguments[i](collectionNew);
		}
	}
	
	
	return collectionNew;
}

/**
 * @params {String[]}
 */
function select() {
	
	var selectFields = [].slice.call(arguments);

	return function select(collection) {
		
		collection.forEach(function(item, i, arr) {
			for (var key in item)  {
				if(selectFields.indexOf(key)===-1 ) {
					delete item[key];

				}
			}
		});
		
		return collection;

	};
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	return function filterIn(collection){
		var collectionNew = collection.filter(function(item) { 
			return 	values.indexOf(item[property]) !== -1;
		});
		
		return collectionNew;
	
	}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
