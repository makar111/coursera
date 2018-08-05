/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	
	function MyDate(strDate) {
		var date = new Date(strDate);

		this._year = date.getFullYear();
		this._month = date.getMonth();
		this._day = date.getDay();
		this._hours = date.getHours();
		this._minute = date.getMinutes();
		this._second = date.getSeconds();
		this._millisecond = date.getMilliseconds();

		this.makeDate = function() {
			return new Date(this._year, this._month, this._day, this._hours, this._minute, this._second, this._millisecond);
		};


		this.changeDate = function(timeInterval, timeIntervalType) {
				this['_' + timeIntervalType] += timeInterval;
				console.log(this.value);
		};



		this.add = function(timeInterval, timeIntervalType) {
			this.changeDate(timeInterval, timeIntervalType);
			return this;
		};
		
		this.subtract = function(subValue, subType) {
//			this._date = new Date(this.date.getTime() + subValue);
			return this;
		};

		Object.defineProperty(this, 'value', {
			get: function() {
				var regex = /.{8}$/;
	 		// makeDate();
				return this.makeDate().toISOString().replace(/T/,' ').replace(regex,'');
			}
		}
		);		

	};
	
	var myDate = new MyDate(date);
	console.log(myDate.makeDate());
	console.log(myDate.value);
	return myDate;
	
};
