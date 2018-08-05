/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	
	function MyDate(strDate) {
		var date = new Date(strDate.replace(/ /,'T'));

		this._years = date.getFullYear();
		this._months = date.getMonth();
		this._days = date.getDate();
		this._hours = date.getHours();
		this._minutes = date.getMinutes();
		this._seconds = date.getSeconds();
		this._milliseconds = date.getMilliseconds();

		
		this.dateFormatMake = function(strDate) {
			var regex = / /;
			return strDate.replace(regex,'T');
		};


		this.makeDate = function() {
			return new Date(this._years, this._months, this._days, this._hours, this._minutes, this._seconds, this._milliseconds);
		};


		this.changeDate = function(timeInterval, timeIntervalType) {
			if (!this.hasOwnProperty('_' + timeIntervalType)) {
				throw new TypeError('Переданно неверное значеие');
			}
				
			this['_' + timeIntervalType] += timeInterval;
		};



		this.add = function(timeInterval, timeIntervalType) {
			if (timeInterval < 0) {
				throw new TypeError('Переданно неверное значеие');
			}

			this.changeDate(timeInterval, timeIntervalType);
			return this;
		};
		
		this.subtract = function(timeInterval, timeIntervalType) {

			if (timeInterval < 0) {
				throw new TypeError('Переданно неверное значеие');
			}


			this.changeDate(timeInterval * (-1), timeIntervalType);
			return this;
		};

		Object.defineProperty(this, 'value', {
			get: function() {
				var regex = /.{8}$/;
				return this.makeDate().toISOString().replace(/T/,' ').replace(regex,'');
			}
		});		

	};
	
	var myDate = new MyDate(date);
	return myDate;
	
};
