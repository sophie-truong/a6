exports.viewProject = function(req, res){
  var name = req.params.name;
  var them = req.params.them;

  console.log("This friend is:" + name);
  res.render('shared', {
    "friendName": name,
    "friendThem": them
  });
}