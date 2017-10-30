// require in express, and set up routing for it, and bring in
// the burger.js model file
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(table) {
		console.log(table);
		res.render('index',{table});
	})
})

router.put('/burgers/update', function(req, res){
	burger.update(req.body.table, function(result) {
		console.log(result);
		res.redirect('/');
	});
});

router.post('/burgers/create', function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		res.redirect('/');
	})
})
module.exports = router;