var data = require("../accounts.json");

function _isContains(json, value) {
    let contains = false;
    Object.keys(json).some(key => {
        contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
         return contains;
    });
    return contains;
 }

exports.auth = function(req, res) {
	var namez = {"name": req.query.name,
				"description": req.query.description};
	if (_isContains(data, req.query.name) && _isContains(data, req.query.description)) {
		res.render('sip');
	} else {
		res.render('index');
	}
}