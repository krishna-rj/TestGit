module.exports = function(app){
    var users = require('./controllers/users');
   
   //To get all the  users
    app.get('/users', users.findAll);

//to find customer using id
    app.get('/users/:id', users.findById);

//to add new user
    app.post('/users', users.add);
    
    app.put('/users/:id', users.update);
    
    
    app.delete('/users/:id', users.delete);
}
