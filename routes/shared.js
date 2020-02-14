exports.viewProject = function(req, res){
  var name = req.params.name;
  var them = req.params.them;
  var you = req.params.you;

  console.log("This friend is:" + name);
  res.render('shared', {
    "friendName": name,
  });
}