var db = require('../Database/config');



console.log(db.db.password)

exports.createUser = function(fname,lname,uname,password) {
     /*var obj ={
        first_name:fname,
        last_name:lname,
        username:uname,
        password:password
    }*/
    db.db.record.query('insert into networks(first_name,last_name,username,passwod)values(fname,lname,uname,pasword)'
    ,function(err,result){
if (err) throw new Error("Error "+err.message);
else
return result;
    });
    
};
