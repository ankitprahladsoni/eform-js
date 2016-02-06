'use strict';
var formly = require('angular-formly');
var formlyBootstrap =  require('angular-formly-templates-bootstrap');
require('script!../node_modules/angular-wizard/dist/angular-wizard.js');
module.exports = angular.module('app', [formly,formlyBootstrap, 'mgo-angular-wizard']);
