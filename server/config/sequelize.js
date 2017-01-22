// function sqlConnection(){
// var Sequelize = require('sequelize');
// // var sequelize = new Sequelize('database', 'username', 'password');
// // var sequelize = new Sequelize('mysql://Weitzmam:i229rorY!@aa1o6qlyflb1dy1.ct0hnq2ct2gz.us-east-1.rds.amazonaws.com:3306/hacksqltest');
// var sequelize = new Sequelize('mysql://root:root@localhost/hacksqltest');

// var fs = require('fs');
// // require path for getting the models path
// var path = require('path');
// // connect to mongoose!
// // mongoose.connect('mongodb://localhost/basic_mongoose');
// // create a variable that points to the path where all of the models live
// var models_path = path.join(__dirname, './../models');
// // read all of the files in the models_path and require (run) each of the javascript files


// sequelize.sync().then(function() {
//   return User.create({
//     first_name:'jane',
//     last_name: 'doe',
//     email:'jandoe@gmail.com',
//     age: '32',
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });

// fs.readdirSync(models_path).forEach(function(file) {
//   if(file.indexOf('.js') >= 0) {
//     // require the file (this runs the model file which registers the schema)
//     require(models_path + '/' + file);
//   }
// });
// }
// module.exports = new sqlConnection();