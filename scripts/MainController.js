(function() {

	'use strict';

	angularFormlyApp.controller('MainController', function($scope, formService) {

		$scope.personDetails = {};
		$scope.personOccupation={};
		$scope.medicalConditions ={};

		$scope.personDetailFormFields =  formService.getPersonDetailForm();
		$scope.personOccupationFormFields = formService.getPersonOccupationForm();
		$scope.medicalConditionsFields = formService.getMedicalQuestionsForm();

	})


})();
