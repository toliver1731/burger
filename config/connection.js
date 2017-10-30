var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
		user: 'root',
		password: 'Spotogo31!',
		database: 'burger_db'
});

connection.connect(function(err) {
	if(err)throw err;
	console.log("connection as id: " + connection.threadid);
});

module.exports = connection;

