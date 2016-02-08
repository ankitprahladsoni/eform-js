module.exports = function(app) {
  app.controller('MainCtrl', function MainCtrl($scope, formService, External) {
  $scope.personDetails = {};
  $scope.personOccupation={};
  $scope.medicalConditions ={};
  $scope.drugDetails={};

  $scope.personDetailFormFields =  formService.getPersonDetailForm();
  $scope.personOccupationFormFields = formService.getPersonOccupationForm();
  $scope.medicalConditionsFields = formService.getMedicalQuestionsForm();
  $scope.drugDetailsFields= formService.getRepeatingSection();

  // function definition
  $scope.finishWizard = finishWizard;
  function finishWizard() {
    alert('hitting external API');
    External.get({name:$scope.personDetails.firstName},function(response){
      console.log(response.content);
    });
  }
  });
};
