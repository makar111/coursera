/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	
	function MyDate(strDate) {
		this._date = new Date(strDate);

		this.add = function() {
			
			return this;
		};
		
		this.subtract = function() {
			
			return this;
		};

		Object.defineProperty(this, 'value', {
			get: function() {
				var regex = /.{8}$/;
				return this._date.toISOString().replace(/T/,' ').replace(regex,'');
			}
		}
		);		

	};
	
	var myDate = new MyDate(date);
	console.log(myDate.value);
	return myDate;
	
};
