module.exports = function(app) {
  app.factory('External', function($resource) {
    return $resource('http://localhost:9000/hello-world'); // Note the full endpoint address
  });
}
