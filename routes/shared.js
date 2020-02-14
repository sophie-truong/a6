exports.viewProject = function(req, res){
  var name = req.params.name;
  console.log("This friend is:" + name);
  res.render('shared', {
    "friendName": name
  });
}