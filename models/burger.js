var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
	// selectAll for getting all the burgers
	selectAll: function(callback) {
		orm.selectAll('burgers', function(res) {
			callback(res);
		});
	},
	// insertOne for adding a new burger
	insertOne: function(columns, values, callback) {
		orm.insertOne('burgers', columns, values, function(res) {
			callback(res);
		});
	},
	// updateOne for changing the burger status
	updateOne: function(values, condition, callback) {
		orm.updateOne('burgers', values, condition, function(res) {
			callback(res);
		});
	}
};

// export burger back to the controller
module.exports = burger;