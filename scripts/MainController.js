(function() {

	'use strict';

	angularFormlyApp.controller('MainController', function($scope, formService) {

		$scope.personDetails = {};
		$scope.personOccupation={};

		$scope.personDetailFormFields =  formService.getPersonDetailForm();
		$scope.personOccupationFormFields = formService.getPersonOccupationForm();


	})


})();
