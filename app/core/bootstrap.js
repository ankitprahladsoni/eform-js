/*jshint browser:true */
'use strict';

require('./vendor.js')();
var appModule = require('../index');

angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name], {
  });
});

require('../eforms/eform-ctrl')(appModule);
require('../eforms/eform-service')(appModule);
require('../eforms/province')(appModule);
require('./additional-config')(appModule);
