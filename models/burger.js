var orm = require("../config/orm.js");

// create the burger variable that will be exported back to the controller
var burger = {
	// selectAll for getting all the burgers
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res);
		})
	},
	
	// updateOne for changing the burger status
	update: function(id, cb){
		orm.update('burgers', id, cb);
		},
	create: function(name, cb) {
		orm.create('burgers', name, cb);
		}
	}


// export burger back to the controller
module.exports = burger;