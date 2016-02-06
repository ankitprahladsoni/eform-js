/*jshint browser:true */
'use strict';

require('./vendor.js')();
var appModule = require('../index');

angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name], {
  });
});

require('../eforms/eform-ctrl')(appModule);
