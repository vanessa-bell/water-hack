// var mongoose = require('mongoose');
var sequelize = require('sequelize');
var models  = require('../models');
module.exports = {
  all: function(request, response) {
    console.log('in the all function')
    models.Store.findAll({}).then(function(stores){
        // if(err){
        //   console.log(err)
        //   console.log(users[0])
        //   response.render('users',{all_users:users,errors:err})
        // }
        // else {
          console.log(users)
          response.render('stores', {all_users:stores,errors:'None'});
        // }
      })
  },
  create: function(request, response) {
   
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