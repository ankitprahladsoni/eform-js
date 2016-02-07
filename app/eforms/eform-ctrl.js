module.exports = function(app) {
  app.controller('MainCtrl', function MainCtrl($scope, formService) {
  $scope.personDetails = {};
  $scope.personOccupation={};
  $scope.medicalConditions ={};
  $scope.drugDetails={};

  $scope.personDetailFormFields =  formService.getPersonDetailForm();
  $scope.personOccupationFormFields = formService.getPersonOccupationForm();
  $scope.medicalConditionsFields = formService.getMedicalQuestionsForm();
  $scope.drugDetailsFields= formService.getRepeatingSection();
  });
};
