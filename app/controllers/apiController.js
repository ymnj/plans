// // let Todos = require('../models/todoModel');
// let bodyParser = require('body-parser');

// module.exports = function(app){

//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: true }));


//   app.get('/api/todos', function(req, res){
//     Todos.find({}, function(err, todos){
//       if(err) throw err;

//       res.send(todos);
//     })
//   })

//   app.get('/api/todos/:user', function(req, res){

//     Todos.find({ username: req.params.user }, function(err, todos){
//       if(err) throw err;

//       res.send(todos);
//     });
//   });

//   app.get('/api/todo/:id', function(req, res){

//     Todos.findById({ _id: req.params.id }, function(err, todo){
//       if(err) throw err;

//       res.send(todo);
//     });
//   });

//   app.post('/api/todo', function(req, res){
//     if(req.body.id){
//       //Has an ID so it's a new todo
//       Todos.findByIdAndUpdate(req.body.id, {
//         title: req.body.title,
//         description: req.body.description,
//         isDone: req.body.isDone,
//         hasAttachment: req.body.hasAttachment,
//         completedAt: req.body.completedAt
//       }, function(err, todo){
//         if(err) throw err;

//         res.send('Update Success');
//       })
//     } else {
//       let newTodo = Todos({
//         title: req.body.title,
//         description: req.body.description,
//         isDone: req.body.isDone,
//         hasAttachment: req.body.hasAttachment,
//         completedAt: req.body.completedAt
//       });
//       newTodo.save(function(err){
//         if(err) throw err;

//         res.send("New todo saved");
//       });
//     }
//   });

//   app.delete('/api/todo', function(req, res){
//     Todos.findByIdAndRemove(req.body.id, function(err){
//       if(err) throw err;

//       res.send('Successly deleted');
//     })

//   })



// };