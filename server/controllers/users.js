// var mongoose = require('mongoose');
var sequelize = require('sequelize');
var models  = require('../models');
module.exports = {
  all: function(request, response) {
    console.log('in the all function')
    models.User.findAll({}).then(function(users){
        // if(err){
        //   console.log(err)
        //   console.log(users[0])
        //   response.render('users',{all_users:users,errors:err})
        // }
        // else {
          console.log(users)
          response.render('users', {all_users:users,errors:'None'});
        // }
      })
  },
  create: function(request, response) {
    var user = new User({first_name:request.body.first_name,last_name:request.body.last_name,age:request.body.age,email:request.body.email})
    user.save(function(err){
      if(err)
      {
         request.session.sessionFlash = {
             type: 'error',
             message: user.errors
          }
           response.redirect('/')
      }
      else{
        response.redirect('/')
      }
    })
  } 
}

// router.get('/', function(req, res) {
//   models.User.findAll({}).then(function(users) {
//     res.render('index', {
//       title: 'Sequelize: Express Example',
//       users: users
//     });
//   });
// });