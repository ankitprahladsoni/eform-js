module.exports = function(app) {
  app.controller('MainCtrl', function MainCtrl() {
    var vm = this;
    // funcation assignment
    vm.finishWizard = finishWizard;
    vm.exampleTitle = 'With angular-wizard'; // add this
    vm.model1 = {};
    vm.model2 = {};

    vm.exitValidation = function(form) {
      return form && !form.$invalid;
    };

    vm.fields = {
      step1: [{
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Username',
          type: 'email',
          placeholder: 'Email address',
          required: true
        }
      }],
      step2: [{
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'First Name',
          required: true
        }
      }, {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          required: true
        }
      }]
    };

    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function finishWizard() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });
};
