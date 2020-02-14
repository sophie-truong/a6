var data = require('../friends.json');

exports.viewProject = function(req, res){
  res.render('shared', data);

}