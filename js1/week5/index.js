module.exports = {

	_subscriberList: {},

	_addEventName: function(event) {
		if (!this._subscriberList.hasOwnProperty(event)) {
			this._subscriberList[event] = [];
		}	
	},
	
	

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
		this._addEventName(event);
		this._subscriberList[event].push([subscriber, handler]);
		return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
		
		if (this._subscriberList.hasOwnProperty(event)) {
			var newList = this._subscriberList[event].filter(function(value) {
				return subscriber !== value[0]
			});
			this._subscriberList[event] = newList;
		}
		return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
		this._subscriberList[event].forEach(function(value) {
			value[1].call(value[0]);
		});
		return this;
    }
}

