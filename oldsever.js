// 
// Routes
// Root Request
// var User = sequelize.define('user', {
//   first_name:Sequelize.STRING,
//   last_name:Sequelize.STRING,
//   email:Sequelize.STRING,
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE,
//   age: Sequelize.STRING
// });



// app.get('/', function(req, res) {
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     res.render('index');
// })

// app.get('/users', function(req, res) {

//     //   User.findAll().then(function (users) {
//     //     console.log(users);
//     //     res.render('users',{all_users:users,errors:'None'});
//     // });
//     sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
//   .then(function(users) {
//     // We don't need spread here, since only the results will be returned for select queries
//     console.log(users)
//     res.render('users',{all_users:users,errors:'None'});
//   })
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    
// })

// app.get('/dashboard',function(request,response){
//   response.render('dashboard');
// })
// // Add User Request 
// app.post('/users/create', function(request, response) {
//     console.log("POST DATA", request.body);
//      User.create({
//       first_name: request.body.first_name,
//       last_name: request.body.last_name,
//       email: request.body.email,
//       age: request.body.age
//     }).then(function(user) {
//     console.log(user.get({
//       plain: true
//     }));
//       response.redirect('/');
//   })
// })