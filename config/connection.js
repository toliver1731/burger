var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burger_db'
	});
}

//establish connection
connection.connect(function(err) {
	if (err) throw err;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;