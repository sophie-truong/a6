var data = require('../friends.json');

// exports.viewProject = function(req, res){
//   res.render('shared', data);

// }

exports.Jae = function(req, res) {
	res.render('sharedJae');
}

exports.Sarah = function(req, res) {
	res.render('sharedSarah');
}

exports.David = function(req, res) {
	res.render('sharedDavid');
}

exports.Sophie = function(req, res) {
	res.render('sharedSophie');
}