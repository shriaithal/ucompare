'use strict';
module.exports = function(app) {
  var indexPage = require('../controllers/indexController');

 app.route('/')
    .get(indexPage.show_home)
};