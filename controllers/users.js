var models = require('../models/users');

exports.findAll = function(req,res) {
  console.log('inside findall controller')
    res.send([{
    "id": 1,
    "name": "testuser",
    "username": "test123",
    "details": "testing "
  }]);
};


exports.findById = function(req,res) {



};
exports.add = function(req,res) {

var firstname = req.params.firstname;
var lastname = req.params.lastname;
var username = req.params.username;
var password =req.params.password;

models.createUser(firstname,lastname,username,password,function(err,result){
 if (err)throw new Error("Error "+err.message);

 return "successfully added";
});


};
exports.update = function() {};
exports.delete = function() {};