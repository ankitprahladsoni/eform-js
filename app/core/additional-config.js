module.exports = function(app) {
  app.run(function(formlyConfig) {
    formlyConfig.setType({
      name: 'typeahead',
      template: '<input type="text" ng-model="personAddress[options.key]" uib-typeahead="item.name for item in to.options | filter:$viewValue | limitTo:8" class="form-control">',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    });

    formlyConfig.setType({
      name: 'repeatSection',
      template: '<div> 	<div class="{{hideRepeat}}"><div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)"> <formly-form fields="fields"                         model="element"form="form"></formly-form><div style="margin-bottom:20px;"><button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">                Remove</button></div><hr></div><p class="AddNewButton"><button type="button" class="btn btn-primary" ng-click="addNew()" >{{to.btnText}}</button></p></div>',
      controller: function($scope) {
        $scope.formOptions = {
          formState: $scope.formState
        };
        $scope.addNew = addNew;
        $scope.copyFields = copyFields;

        function copyFields(fields) {
          fields = angular.copy(fields);
          addRandomIds(fields);
          return fields;
        }

        function addNew() {
          $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
          var repeatsection = $scope.model[$scope.options.key];
          var lastSection = repeatsection[repeatsection.length - 1];
          var newsection = {};
          if (lastSection) {
            newsection = angular.copy(lastSection);
          }
          repeatsection.push(newsection);
        }

        function addRandomIds(fields) {
          var unique = 0;
          angular.forEach(fields, function(field, index) {
            unique++;
            if (field.fieldGroup) {
              addRandomIds(field.fieldGroup);
              return; // fieldGroups don't need an ID
            }
            if (field.templateOptions && field.templateOptions.fields) {
              addRandomIds(field.templateOptions.fields);
            }
            field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
          });
        }

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }
    });
  });
};
