var data = require('../friends.json');

exports.view = function(request, response){
	console.log(data);
	response.render('friends', data);
}